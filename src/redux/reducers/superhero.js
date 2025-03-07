import { createReducer } from '@reduxjs/toolkit';

import {
    startFetchingSuperheroes,
    successFetchingSuperheroes ,
    errorFetchingSuperheroes,
    startFetchingBio,
    successFetchingBio,
    errorFetchingBio,
} from '../actions/superhero';

const initialState = {
    isFetchingSuperheroes: false,
    error: undefined,
    superheroes: [],
    isFetchingBio: false,
    bio: {},
    photo: undefined,
    work: {},
    connections: {},
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
    .addCase(startFetchingBio.toString(), (state) => {
        return {
            ...state,
            isFetchingBio: true,
            error: undefined,
            bio: {},
            photo: undefined,
            work: {},
            connections: {},
        };
    })
    .addCase(successFetchingBio.toString(), (state, action) => {
        return {
            ...state,
            isFetchingBio: false,
            bio: action.payload.bio,
            photo: action.payload.photo,
            work: action.payload.work,
            connections: action.payload.connections,
        };
    })
    .addCase(errorFetchingBio.toString(), (state, action) => {
        return {
            ...state,
            isFetchingBio: false,
            error: action.payload.error,
        };
    })
    .addDefaultCase((state) => state);
});

export default superheroReducer;