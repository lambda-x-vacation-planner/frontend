import axios from 'axios';
import { Dispatch } from 'redux';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

interface RegisterCred {
  email: string;
  password: string;
  name: string;
}

interface RegisterAction {
  type: typeof REGISTER_SUCCESS;
  payload: string;
}

export const register = (obj: RegisterCred) => (dispatch: Dispatch) => {
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://ramble-round.herokuapp.com/user/reg', obj)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      dispatch<RegisterAction>({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export type RegisterActionTypes = RegisterAction;
