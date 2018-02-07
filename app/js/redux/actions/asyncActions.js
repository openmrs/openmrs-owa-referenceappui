import { ASYNC_LOADING, ASYNC_ERROR } from '../constants/actionTypes';

export const apiCall = () => {
  type: ASYNC_LOADING,
}

export const apiCallError = (error) => {
  type: ASYNC_ERROR,
  error,
}
