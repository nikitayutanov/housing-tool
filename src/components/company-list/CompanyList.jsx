import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BASE_URL } from 'constants.js';
import { selectCompany } from 'actions/actions';
import Button from 'components/button/Button';
import Loader from 'components/loader/Loader';
import './CompanyList.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `${BASE_URL}/Request/companies`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
        setSelectValue(data[0].id);
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
    dispatch(selectCompany(selectValue));
  };

  return (
    <div className="company-list-wrapper">
      <p className="company-list-text">Выберите управляющую компанию:</p>
      {companies.length ? (
        <select
          className="company-list"
          value={selectValue}
          onChange={handleChange}
        >
          {getCompanies()}
        </select>
      ) : (
        <Loader />
      )}
      <Button onClick={handleClick} value="Ок" />
    </div>
  );
}

export default CompanyList;
