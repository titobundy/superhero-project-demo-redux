import { createReducer } from '@reduxjs/toolkit';

import {
    startFetchingSuperheroes,
    successFetchingSuperheroes ,
    errorFetchingSuperheroes,
} from '../actions/superhero';

const initialState = {
    isFetchingSuperheroes: false,
    error: undefined,
    superheroes: [],
};
const superheroReducer = createReducer(initialState, (builder) => {
    builder.addCase(startFetchingSuperheroes.toString(), (state) => {
        return {
            ...state,
            isFetchingSuperheroes: true,
        };
    })
    .addCase(successFetchingSuperheroes.toString(), (state, action) => {
        return {
            ...state,
            isFetchingSuperheroes: false,
            superheroes: action.payload.data,
        };
    })
    .addCase(errorFetchingSuperheroes.toString(), (state, action) => {
        return {
            ...state,
            isFetchingSuperheroes: false,
            superheroes: [],
            error: action.payload.error
        };
    })
    .addDefaultCase((state) => state);
});

export default superheroReducer;