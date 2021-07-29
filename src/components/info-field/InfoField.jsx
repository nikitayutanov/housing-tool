import './InfoField.css';

function InfoField({ label, value }) {
  return (
    value && (
      <div className="info-field">
        <p>{label}:</p>
        <p>{value}</p>
      </div>
    )
  );
}

export default InfoField;
