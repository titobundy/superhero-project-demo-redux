import { configureStore } from '@reduxjs/toolkit'
import superheroReducer from './reducers/superhero';
import loginSlice from './slices/login';

export default configureStore({
  reducer: {
    superheroReducer,
    loginReducer: loginSlice.reducer,
  }
})