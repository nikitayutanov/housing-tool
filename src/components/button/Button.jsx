import './Button.css';

function Button({ className, value, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
