import { login_sucess } from '../actions/actionTypes';
const initialState = {
    newValue: ''
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case login_sucess:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };