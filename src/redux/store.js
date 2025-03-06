import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/login';

export default configureStore({
  reducer: {
    loginReducer
  }
})