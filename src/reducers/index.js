import { combineReducers } from 'redux';
import selectedCompanyReducer from './selectedCompany';
import clientsReducer from './clients';
import formValuesReducer from './formValues';

const rootReducer = combineReducers({
  selectedCompany: selectedCompanyReducer,
  clients: clientsReducer,
  formValues: formValuesReducer,
});

export default rootReducer;
