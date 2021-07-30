import './Form.css';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import { useState } from 'react';
import BASE_URL from 'constants.js';

function Form({ closeModal }) {
  const [values, setValues] = useState({ name: '', phone: '', email: '' });

  const isFormValid = () => {
    for (const field in values) {
      if (!values[field].trim()) {
        return false;
      }
    }
    return true;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const url = `${BASE_URL}​/HousingStock​/client`;

    if (isFormValid()) {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
      })
        .then((response) => {
          console.log(response.json());
          closeModal();
        })
        .catch((error) => console.log(`Something went wrong: ${error}`));
    }
  };

  return (
    <form className="form" action="">
      <Input
        label="Имя"
        type="text"
        id="name"
        values={values}
        setValues={setValues}
      />
      <Input
        label="Телефон"
        type="number"
        id="phone"
        values={values}
        setValues={setValues}
      />
      <Input
        label="Эл. почта"
        type="email"
        id="email"
        values={values}
        setValues={setValues}
      />
      <Button onClick={handleClick} value="Ок" />
    </form>
  );
}

export default Form;
