import { useState } from 'react';

function ListItem(props) {
  const { value, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li onClick={handleClick}>
      {value}
      {isOpen && children}
    </li>
  );
}

export default ListItem;
