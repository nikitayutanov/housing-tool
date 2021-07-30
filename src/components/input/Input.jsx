import { useDispatch, useSelector } from 'react-redux';
import './Input.css';
import { selectFormValues } from 'selectors';
import { setFormValues } from 'actions/actions';

function Input(props) {
  const { label, type, id } = props;
  const values = useSelector(selectFormValues);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, id } }) => {
    dispatch(setFormValues(id, value));
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
        value={values[id]}
      />
    </div>
  );
}

export default Input;
