import { useState, useEffect } from 'react';
import List from 'components/list/List';
import ListItem from 'components/list-item/ListItem';
import ClientList from 'components/client-list/ClientList';
import Modal from 'components/modal/Modal';
import BASE_URL from 'constants.js';
import './HousingList.css';

function HousingList({ companyId }) {
  const [tree, setTree] = useState([]);
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}/HousingStock?companyId=${companyId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const housingStock = data;

        let currentStreetId = null;
        let currentHouseId = null;
        const streets = {};
        const houses = {};

        for (const item of housingStock) {
          // order of items in housingStock matters
          const { streetId, streetName, houseId, building, corpus } = item;

          if (streetId !== currentStreetId) {
            currentStreetId = streetId;
            streets[streetId] = {
              id: streetId,
              value: `Улица ${streetName}`,
              children: [],
            };
          }
          if (houseId !== currentHouseId) {
            currentHouseId = houseId;
            const address =
              'Дом ' + (corpus ? `${building}/${corpus}` : building);

            houses[houseId] = {
              parentId: streetId,
              id: houseId,
              value: address,
              children: [],
            };
          }
        }

        for (const item of housingStock) {
          const { houseId } = item;
          const newItem = {
            ...item,
            value: `Квартира ${item.flat}`,
            id: item.addressId,
          };
          houses[houseId].children.push(newItem);
        }

        for (const house in houses) {
          const { parentId } = houses[house];
          streets[parentId].children.push(houses[house]);
        }

        const streetsArray = [];

        for (const street in streets) {
          streetsArray.push(streets[street]);
        }

        setTree(streetsArray);
      });
  }, [companyId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderTree = (tree) => {
    return tree.map((node) => {
      const { id, value, children, clients } = node;

      return (
        <ListItem
          value={value}
          key={id}
          isLeaf={!children?.length}
          clients={clients}
          setClients={setClients}
          openModal={openModal}
        >
          {children && <List>{renderTree(children)}</List>}
        </ListItem>
      );
    });
  };

  console.log(tree);

  return (
    <div className="housing-list-wrapper">
      {clients.length ? (
        <ClientList clients={clients} />
      ) : (
        <ul className="housing-list">{renderTree(tree)}</ul>
      )}
      {isModalOpen && (
        <Modal close={closeModal}>
          <p>В выбранной квартире нет жильцов</p>
        </Modal>
      )}
    </div>
  );
}

export default HousingList;

{
  /* <ul className="housing-list">
  <li className="street">
    Улица 1
    <ul className="houses">
      <li className="house">
        Дом 1
        <ul className="flats">
          <li className="flat">Квартира 1</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>; */
}

// tree.map((street) => {
//   const { id, value, children, isOpen } = street;

//   return (
//     <li key={id} data-id={id} onClick={handleClick}>
//       {value}

//       {children && (
//         <ul className={isOpen ? 'houses' : 'houses hidden'}>
//           {children.map((house) => {
//             const { id, value, children } = house;
//             // const address = corpus
//             //   ? `${building}/${corpus}`
//             //   : building;

//             return (
//               <li className="house" key={id} data-id={id}>
//                 {value}

//                 {children && (
//                   <ul className="flats">
//                     {children.map((flatItem) => {
//                       const { value, id } = flatItem;

//                       return <li key={id}>{value}</li>;
//                     })}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </li>
//   );
// })
