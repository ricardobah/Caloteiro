import { loginReducer } from './loginReducer';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  loginState: loginReducer,
  
});