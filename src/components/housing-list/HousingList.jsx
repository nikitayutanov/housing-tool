import { useState, useEffect } from 'react';
import BASE_URL from 'constants.js';
import './HousingList.css';

function HousingList({ companyId }) {
  const [housingStock, setHousingStock] = useState([]);

  useEffect(() => {
    const url = `${BASE_URL}/HousingStock?companyId=${companyId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setHousingStock(data));
  }, [companyId]);

  const getList = () => {};

  return <div className="housing-list-wrapper">{getList()}</div>;
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
