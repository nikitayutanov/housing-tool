import './ClientCard.css';
import InfoField from 'components/info-field/InfoField';
import CloseButton from 'components/close-button/CloseButton';
import BASE_URL from 'constants.js';

function ClientCard({ name, phone, email, bindId }) {
  const deleteClient = () => {
    const url = `${BASE_URL}/HousingStock​/bind_client​/${bindId}`;

    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Something went wrong: ${error}`));
  };

  return (
    <li className="client">
      <CloseButton onClick={deleteClient} />
      <InfoField label="Имя" value={name} />
      <InfoField label="Телефон" value={phone} />
      <InfoField label="Эл. почта" value={email} />
    </li>
  );
}

export default ClientCard;
