import * as types from 'constants.js';

const {
  SELECT_COMPANY,
  RESET_COMPANY,
  SET_CLIENTS,
  RESET_CLIENTS,
  SET_FORM_VALUES,
  RESET_FORM_VALUES,
  ADD_CLIENT,
  DELETE_CLIENT,
} = types;

export const selectCompany = (id) => ({ type: SELECT_COMPANY, payload: id });
export const resetCompany = () => ({ type: RESET_COMPANY });

export const setClients = (clients) => ({
  type: SET_CLIENTS,
  payload: clients,
});
export const resetClients = () => ({
  type: RESET_CLIENTS,
});

export const setFormValues = (id, text) => ({
  type: SET_FORM_VALUES,
  payload: { id, text },
});
export const resetFormValues = () => ({
  type: RESET_FORM_VALUES,
});

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: client,
});
export const deleteClient = (id) => ({
  type: DELETE_CLIENT,
  payload: id,
});
