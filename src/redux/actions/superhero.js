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

export const startFetchingBio = createAction('START_FETCHING_BIO');
export const errorFetchingBio = createAction('ERROR_FETCHING_BIO');
export const successFetchingBio = createAction('SUCCESS_FETCHING_BIO');

export const fetchBio = (id) => async (dispatch) => {
    try {
        dispatch(startFetchingBio());
        const [bioData, bioPhoto, bioWorkRes, bioConnectionsRes] = await Promise.all([
            apiCall.get(`/${id}/biography`),
            apiCall.get(`/${id}/image`),
            apiCall.get(`/${id}/work`),
            apiCall.get(`/${id}/connections`)
        ]);

        dispatch(successFetchingBio({ 
            bio: bioData?.data, 
            photo: bioPhoto?.data?.url, 
            work: bioWorkRes?.data, 
            connections: bioConnectionsRes?.data 
        }));
    } catch (error) {
        dispatch(errorFetchingBio({ error }));
    }
};