import { LOGIN_SUCCESS } from '../actions';
import { REGISTER_SUCCESS } from '../actions';
import { LoginActionTypes } from '../actions/login';
import { RegisterActionTypes } from '../actions/register';
import { combineReducers } from 'redux';

interface InitialState {
  error: string;
  signingUp: boolean;
  loggingIn: boolean;
}

const initialState: InitialState = {
  error: '',
  signingUp: true,
  loggingIn: true,
};

const loginReducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: '',
      };
    default:
      return state;
  }
};
const registerReducer = (state = initialState, action: RegisterActionTypes) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        signingIn: false,
        error: '',
      };
    default:
      return state;
  }
};

const reducer = combineReducers({ registerReducer, loginReducer });

export default reducer;
