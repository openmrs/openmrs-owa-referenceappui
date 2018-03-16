import * as actionTypes from '../constants/actionTypes.js';
import { fetchAppsApiCall, apiCallError } from './asyncActions.js';
import {apiHelper} from '../../helpers/apiHelper';

export const fetchApps = (payload) => ({
  type: actionTypes.FETCH_APPS_FULFILLED,
  payload,
});

export const selectView = () => ({
  type: actionTypes.SET_VIEW,
});

export const fetchNotifications = (payload) => ({
  type: actionTypes.GET_NOTIFICATIONS,
  payload,
});


export const getUserApps = () => {
  return (dispatch) => {
    dispatch(fetchAppsApiCall());
    return apiHelper
      .get('/v1/extension?v=default&scope=user&extensionPoint=org.openmrs.referenceapplication.homepageLink')
      .then(response => {
        dispatch(getUserNotifications());
        return dispatch(fetchApps(response));
      })
      .catch(error => dispatch(apiCallError(error)));
  };
};

export const getUserNotifications = () => {
  return (dispatch) => {
    return apiHelper
      .get('/v1/administrativenotification')
      .then(response => dispatch(fetchNotifications(response)))
      .catch(error =>  dispatch(apiCallError(error)));
  };
};
