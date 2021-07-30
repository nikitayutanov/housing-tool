import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setClients } from 'actions/actions';

function ListItem(props) {
  const { value, children, clients, isLeaf, openModal } = props;

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();

    if (isLeaf) {
      if (clients?.length) {
        dispatch(setClients(clients));
      } else {
        openModal();
      }
    } else {
      setIsOpen((prevState) => !prevState);
    }
  };

  return (
    <li onClick={handleClick}>
      {value}
      {isOpen && children}
    </li>
  );
}

export default ListItem;
