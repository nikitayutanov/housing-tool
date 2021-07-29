import InfoField from 'components/info-field/InfoField';
import Modal from 'components/modal/Modal';
import Form from 'components/form/Form';
import './ClientList.css';
import { useState } from 'react';

function ClientList({ clients }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Добавить</button>
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
      {isModalOpen && (
        <Modal close={closeModal}>
          <Form closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default ClientList;
