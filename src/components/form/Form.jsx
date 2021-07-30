import './Form.css';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import { BASE_URL } from 'constants.js';
import { selectFormValues } from 'selectors';
import { useSelector } from 'react-redux';

function Form({ closeModal }) {
  const values = useSelector(selectFormValues);

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
      <Input label="Имя" type="text" id="name" />
      <Input label="Телефон" type="number" id="phone" />
      <Input label="Эл. почта" type="email" id="email" />
      <Button onClick={handleClick} value="Ок" />
    </form>
  );
}

export default Form;
