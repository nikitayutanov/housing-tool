import { useEffect, useState } from 'react';
import BASE_URL from 'constants.js';
import './CompanyList.css';

function CompanyList({ setCompanyId }) {
  const [companies, setCompanies] = useState([]);
  const [selectValue, setSelectValue] = useState(null);

  useEffect(() => {
    const url = `${BASE_URL}/Request/companies`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }, []);

  const getCompanies = () => {
    return companies.map((company) => {
      const { name, id } = company;
      return (
        <option value={id} key={id}>
          {name}
        </option>
      );
    });
  };

  const handleChange = ({ target: { value } }) => {
    setSelectValue(value);
  };

  const handleClick = () => {
    setCompanyId(selectValue);
  };

  return (
    <div className="company-list-wrapper">
      <p>Выберите управляющую компанию:</p>
      <select
        className="company-list"
        value={selectValue}
        onChange={handleChange}
      >
        {getCompanies()}
      </select>
      <button onClick={handleClick}>Ок</button>
    </div>
  );
}

export default CompanyList;
