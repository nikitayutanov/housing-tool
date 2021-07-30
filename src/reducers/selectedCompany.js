import { SELECT_COMPANY, RESET_COMPANY } from 'constants.js';

function selectedCompanyReducer(state = '', action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_COMPANY:
      return payload;
    case RESET_COMPANY:
      return '';
    default:
      return state;
  }
}

export default selectedCompanyReducer;
