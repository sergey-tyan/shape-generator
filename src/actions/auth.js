import { push } from 'connected-react-router';

import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS } from '../constants/actions';
import { fakeSignIn, fakeSignOut } from '../services/auth';

const signInSuccessAction = () => ({
  type: SIGN_IN_SUCCESS
});

const signInErrorAction = error => ({
  type: SIGN_IN_ERROR,
  error
});

const signOutAction = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signIn = (email, password) => dispatch => {
  fakeSignIn(email, password)
    .then(res => {
      dispatch(signInSuccessAction());
      dispatch(push('/shape-generator'));
    })
    .catch(error => dispatch(signInErrorAction(error)));
};

export const signOut = () => dispatch => {
  fakeSignOut();
  dispatch(push('/'));
  dispatch(signOutAction());
};
