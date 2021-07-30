import { SET_FORM_VALUES, RESET_FORM_VALUES } from 'constants.js';

const initState = { name: '', phone: '', email: '' };

function formValuesReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FORM_VALUES:
      const { id, text } = payload;
      return { ...state, [id]: text };
    case RESET_FORM_VALUES:
      return initState;
    default:
      return state;
  }
}

export default formValuesReducer;
