import { LOGIN_SUCCESS } from '../actions';
import { REGISTER_SUCCESS } from '../actions';
import { LoginActionTypes } from '../actions/login';
import { RegisterActionTypes } from '../actions/register';
import { combineReducers } from 'redux';

export interface InitialState {
  name: string;
  email: string;
  password: string;
  error?: string;
  signingUp?: boolean;
  loggingIn?: boolean;
}

export const initialState: InitialState = {
  name: '',
  email: '',
  password: '',
  error: '',
  loggingIn: true,
  signingUp: true,
};

const loginReducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
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
        signingUp: false,

        error: '',
      };
    default:
      return state;
  }
};

const reducer = combineReducers({ registerReducer, loginReducer });

export type AppState = ReturnType<typeof reducer>;
export default reducer;
