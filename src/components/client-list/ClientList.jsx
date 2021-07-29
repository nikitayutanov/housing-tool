import InfoField from 'components/info-field/InfoField';
import './ClientList.css';

function ClientList({ clients }) {
  return (
    <ul className="clients">
      {clients.map((client) => {
        const { id, bindId, email, name, phone } = client;

        return (
          <li className="client" key={id}>
            <InfoField label="Имя" value={name} />
            <InfoField label="Телефон" value={phone} />
            <InfoField label="Эл. почта" value={email} />
          </li>
        );
      })}
    </ul>
  );
}

export default ClientList;
