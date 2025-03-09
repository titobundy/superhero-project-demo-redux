import { createAction } from '@reduxjs/toolkit';
import {
  sendingAuthFormS,
  completedSendAuthFormS,
  errorSendAuthFormS,
  checkingAuthS,
  completedAuthS,
  errorAuthS,
} from '../slices/login';

export const checkingAuth = createAction('CHECKING_AUTH');
export const completedAuth = createAction('COMPLETED_AUTH');
export const errorAuth = createAction('ERROR_AUTH');

export const sendingAuthForm = createAction('SENDING_AUTH_FORM');
export const completedSendAuthForm = createAction('COMPLETED_SEND_AUTH_FORM');
export const errorSendAuthForm = createAction('ERROR_SEND_AUTH_FORM');

// Define a thunk that dispatches those Auth action
export const checkIfUserIsAuth = () => (dispatch) => {
  try {
    dispatch(checkingAuthS());
    const isAuth = localStorage.getItem('@superhero-isAuth')?.length > 0;
    dispatch(completedAuthS({ isAuth }));
  } catch (error) {
    dispatch(errorAuthS({ error }));
  }
};

// Define a thunk that dispatches those Login action
export const submitLogin = (name, email) => (dispatch) => {
  try {
    dispatch(sendingAuthFormS());
    localStorage.setItem('@superhero-isAuth', 'true');
    localStorage.setItem(
      '@superhero-data',
      JSON.stringify({
        name,
        email,
      })
    );

    dispatch(completedSendAuthFormS());
  } catch (error) {
    dispatch(errorSendAuthFormS({ error }));
  }
};
