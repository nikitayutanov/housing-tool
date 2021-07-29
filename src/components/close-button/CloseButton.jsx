import './CloseButton.css';

function CloseButton({ onClick }) {
  return <button className="close-button" onClick={onClick}></button>;
}

export default CloseButton;
