import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const register = cred => dispatch => {
  // console.log("obj", obj);
  dispatch({ type: REGISTER_START });
  return axios
    .post('https://ramble-round.herokuapp.com/user/reg', cred)
    .then(res => {
      console.log('register', res);
      localStorage.setItem('token', res.data);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
