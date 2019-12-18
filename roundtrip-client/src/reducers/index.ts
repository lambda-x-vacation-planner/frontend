import { LOGIN_START, LOGIN_SUCCESS } from '../actions';

interface InitialState {
  error: string;
  signingUp: boolean;
  loggingIn: boolean;
}

const initialState: InitialState = {
  error: '',
  signingUp: false,
  loggingIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: '',
      };
  }
};

export default reducer;
