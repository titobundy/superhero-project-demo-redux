import { createAction } from '@reduxjs/toolkit';
import apiCall from "../api";

export const startFetchingSuperheroes = createAction('START_FETCHING_SUPERHEROES');
export const errorFetchingSuperheroes = createAction('ERROR_FETCHING_SUPERHEROES');
export const successFetchingSuperheroes = createAction('SUCCESS_FETCHING_SUPERHEROES');

export const fetchSuperheroes = (searchText) => async (dispatch) => {
    try {
        dispatch(startFetchingSuperheroes());
        const { data } = await apiCall.get(`/search/${searchText}`);
        dispatch(successFetchingSuperheroes({ data: data?.results || [] }));
    } catch (error) {
        dispatch(errorFetchingSuperheroes({ error }));
    }
}
