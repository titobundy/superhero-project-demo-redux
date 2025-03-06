import { createReducer } from '@reduxjs/toolkit';
import { CHECK_LOGIN } from '../actions/login';

const loginReducer = createReducer([], (builder) => {
  builder.addCase(CHECK_LOGIN, (state, action) => {
    console.log(action);
    // return action.payload;
  });
});
export default loginReducer;
