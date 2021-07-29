import { useState } from 'react';

function ListItem(props) {
  const { value, children, isLeaf, clients, setClients } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    if (isLeaf) {
      setClients(clients);
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
