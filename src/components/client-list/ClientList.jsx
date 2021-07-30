import ClientCard from 'components/client-card/ClientCard';
import Modal from 'components/modal/Modal';
import Form from 'components/form/Form';
import Button from 'components/button/Button';
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
      <Button className="client-list-button" onClick={openModal} value="Добавить" />
      <ul className="clients">
        {clients.map((client) => {
          const { id, bindId, email, name, phone } = client;

          return (
            <ClientCard
              key={id}
              email={email}
              name={name}
              phone={phone}
              bindId={bindId}
            />
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
