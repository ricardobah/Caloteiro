import { login_sucess } from '../actions/actionTypes';

export const loginSucess = value => ({
    type: login_sucess,
    newValue: value
  });