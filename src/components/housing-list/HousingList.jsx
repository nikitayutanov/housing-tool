import { useState, useEffect } from 'react';
import List from 'components/list/List';
import ListItem from 'components/list-item/ListItem';
import ClientList from 'components/client-list/ClientList';
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';
import Loader from 'components/loader/Loader';
import { BASE_URL } from 'constants.js';
import './HousingList.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'actions/actions';
import * as selectors from 'selectors';

const { selectSelectedCompany, selectClients } = selectors;
const { resetCompany, resetClients } = actions;

function HousingList() {
  const [tree, setTree] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const selectedCompany = useSelector(selectSelectedCompany);
  const clients = useSelector(selectClients);
  const dispatch = useDispatch();

  const isAnyClients = clients.length;

  useEffect(() => {
    const url = `${BASE_URL}/HousingStock?companyId=${selectedCompany}`;

    fetch(url)
      .then((response) => response.json())
      .then((housingStock) => {
        const sortedByHouses = {};
        const sortedByStreets = {};
        const unpackedStock = [];

        const sortStockByHouses = () => {
          for (const item of housingStock) {
            const {
              streetId,
              streetName,
              houseId,
              building,
              corpus,
              flat,
              addressId,
            } = item;
            const hasNode = sortedByHouses.hasOwnProperty(houseId);
            const address =
              'Дом ' + (corpus ? `${building}/${corpus}` : building);
            const initHouseNode = {
              parentId: streetId,
              streetName,
              id: houseId,
              value: address,
              children: [],
            };

            if (!hasNode) {
              sortedByHouses[houseId] = { ...initHouseNode };
            }

            const newItem = {
              ...item,
              value: `Квартира ${flat}`,
              id: addressId,
            };

            sortedByHouses[houseId].children.push(newItem);
          }
        };

        const sortStockByStreets = () => {
          for (const key in sortedByHouses) {
            const item = sortedByHouses[key];
            const { parentId, streetName } = item;
            const hasNode = sortedByStreets.hasOwnProperty(parentId);
            const initStreetNode = {
              id: parentId,
              value: `Улица ${streetName}`,
              children: [],
            };

            if (!hasNode) {
              sortedByStreets[parentId] = { ...initStreetNode };
            }

            sortedByStreets[parentId].children.push(item);
          }
        };

        const unpackSortedStock = () => {
          for (const key in sortedByStreets) {
            const item = sortedByStreets[key];
            unpackedStock.push(item);
          }
        };

        sortStockByHouses();
        sortStockByStreets();
        unpackSortedStock();

        setTree(unpackedStock);
        setIsLoading(false);
      });
  }, [selectedCompany]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderTree = (tree) => {
    return tree.map((node) => {
      const { id, value, children, clients: nodeClients } = node;

      return (
        <ListItem
          value={value}
          key={id}
          isLeaf={!children?.length}
          clients={nodeClients}
          openModal={openModal}
        >
          {children && <List>{renderTree(children)}</List>}
        </ListItem>
      );
    });
  };

  const handleBackButtonClick = () => {
    isAnyClients ? dispatch(resetClients()) : dispatch(resetCompany());
  };

  const getHousingList = () => {
    if (isLoading) {
      return <Loader />;
    } else if (!tree.length) {
      return <p>В выбранной компании пусто :c</p>;
    }

    return <ul className="housing-list">{renderTree(tree)}</ul>;
  };

  return (
    <div className="housing-list-wrapper">
      <Button
        className="back-button"
        value="Назад"
        onClick={handleBackButtonClick}
      />
      {isAnyClients ? <ClientList /> : getHousingList()}
      {isModalOpen && (
        <Modal close={closeModal}>
          <p>В выбранной квартире нет жильцов</p>
        </Modal>
      )}
    </div>
  );
}

export default HousingList;
