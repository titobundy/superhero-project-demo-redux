import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCheckingAuth: false,
  isSendingAuthForm: false,
  isSuccessLogged: false,
  isAuth: false,
  error: undefined,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    checkingAuthS: (state) => {
      state.isCheckingAuth = true;
    },
    completedAuthS: (state, action) => {
      state.isCheckingAuth = false;
      state.isAuth = action.payload.isAuth;
    },
    errorAuthS: (state, action) => {
        state.isAuth = false;
        state.isCheckingAuth = false;
        state.error = action.payload.error;
    },
    sendingAuthFormS: (state) => {
      state.isSendingAuthForm = true;
      state.error = undefined;
    },
    completedSendAuthFormS: (state) => {
      state.isSendingAuthForm = false;
      state.isSuccessLogged = true;
    },
    errorSendAuthFormS: (state, action) => {
      state.isSendingAuthForm = false;
      state.isSuccessLogged = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  checkingAuthS,
  completedAuthS,
  errorAuthS,
  sendingAuthFormS,
  completedSendAuthFormS,
  errorSendAuthFormS,
} = loginSlice.actions;

export default loginSlice;
