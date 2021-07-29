import { useState } from 'react';

function ListItem(props) {
  const { value, children, isLeaf, clients, setClients, openModal } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    if (isLeaf) {
      if (clients?.length) {
        setClients(clients);
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
