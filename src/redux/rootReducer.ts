import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
