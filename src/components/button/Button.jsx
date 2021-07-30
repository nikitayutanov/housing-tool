import './Button.css';

function Button({ className, value, onClick }) {
  return (
    <button
      className={className ? `button ${className}` : 'button'}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
