import axios from 'axios';
import { Dispatch } from 'redux';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface LoginCred {
  email: string;
  password: string;
}

interface LoginAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginCred;
}

export const login = (obj: LoginCred) => (dispatch: Dispatch) => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://ramble-round.herokuapp.com/user/login', obj)
    .then(res => {
      localStorage.setItem('token', res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export type LoginActionTypes = LoginAction;
