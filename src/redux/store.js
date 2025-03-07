import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/login';
import superheroReducer from './reducers/superhero';

export default configureStore({
  reducer: {
    loginReducer,
    superheroReducer,
  }
})