import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS } from '../constants/actions';
import { hasToken } from '../services/auth';

const defaultState = {
  signedIn: hasToken(),
  error: null
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        signedIn: true,
        error: null
      };
    case SIGN_IN_ERROR:
      return {
        signedIn: false,
        error: action.error
      };
    case SIGN_OUT_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
