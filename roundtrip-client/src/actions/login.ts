import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

interface RegisterCredential {
  email: string;
  password: string;
  name: string;
}

export const login = (cred: RegisterCredential) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://ramble-round.herokuapp.com/user/login', cred)
    .then(res => {
      localStorage.setItem('token', res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
