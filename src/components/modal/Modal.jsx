import { createPortal } from 'react-dom/cjs/react-dom.development';
import CloseButton from 'components/close-button/CloseButton';
import './Modal.css';

function Modal({ children, close }) {
  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  const component = (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <CloseButton onClick={close} />
        {children}
      </div>
    </div>
  );

  return createPortal(component, document.body);
}

export default Modal;
