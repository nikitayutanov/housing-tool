import './Input.css';

function Input(props) {
  const { label, type, id, values, setValues } = props;

  const handleChange = ({ target: { value, id } }) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={id}>
        {label}:
      </label>
      <input
        className="input"
        type={type}
        name={id}
        id={id}
        onChange={handleChange}
        value={values.id}
      />
    </div>
  );
}

export default Input;
