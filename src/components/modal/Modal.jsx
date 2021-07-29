import { createPortal } from 'react-dom/cjs/react-dom.development';
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
        <button className="close-button" onClick={close}></button>
        {children}
      </div>
    </div>
  );

  return createPortal(component, document.body);
}

export default Modal;
