import { ASYNC_LOADING, ASYNC_ERROR, FETCHING_APPS } from '../constants/actionTypes';

export const apiCall = () => ({
  type: ASYNC_LOADING,
});

export const apiCallError = (error) => ({
  type: ASYNC_ERROR,
  error,
});

export const fetchAppsApiCall = () => ({
  type: FETCHING_APPS,
});
