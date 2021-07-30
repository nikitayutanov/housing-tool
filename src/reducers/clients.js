import {
  SET_CLIENTS,
  RESET_CLIENTS,
  ADD_CLIENT,
  DELETE_CLIENT,
} from 'constants.js';

function clientsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CLIENTS:
      return payload;
    case RESET_CLIENTS:
      return [];
    case ADD_CLIENT:
      return [...state, payload];
    case DELETE_CLIENT:
      return state.filter((client) => client.bindId !== payload);
    default:
      return state;
  }
}

export default clientsReducer;
