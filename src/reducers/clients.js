import { SET_CLIENTS, RESET_CLIENTS } from 'constants.js';

function clientsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CLIENTS:
      return payload;
    case RESET_CLIENTS:
      return [];
    default:
      return state;
  }
}

export default clientsReducer;
