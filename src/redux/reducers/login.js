import { createReducer } from '@reduxjs/toolkit';
import { checkingAuth, completedAuth, errorAuth } from '../actions/login';

const initialState = {
  isCheckingAuth: false,
  isAuth: false,
  error: undefined,
}

const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(checkingAuth.toString(), (state, action) => {
    return {
      ...state,
      isCheckingAuth: true,
    };
  })
  .addCase(completedAuth.toString(), (state, action) => {
    return {
      ...state,
      isCheckingAuth: false,
      isAuth: action.payload.isAuth,
    }
  })
  .addCase(errorAuth.toString(), (state, action) => {
    return {
      ...state,
      isAuth: false,
      isCheckingAuth: false,
      error: action.payload.error,
    }
  });
});
export default loginReducer;
