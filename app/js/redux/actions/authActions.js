import { hashHistory } from 'react-router';

import * as actionTypes from '../constants/actionTypes.js';
import { apiCall, apiCallError } from './asyncActions.js';
import {apiHelper} from '../../helpers/apiHelper';

export const getOpenmrsUrl = () => {
  let location = window.location.toString();
  let serverLocation = location.substring(0, location.indexOf('/owa/'));
  let last_string = serverLocation
    .substring(serverLocation.lastIndexOf('/') + 1, serverLocation.length)
    .toLowerCase();
  let finallocation = serverLocation;
  let isOpenMRS = last_string.indexOf('openmrs');

  if (isOpenMRS < 0) {
    finallocation = serverLocation.substring(0, serverLocation.lastIndexOf('/'));
  }
  return finallocation;
};

export const fetchSession = (payload) => ({
  type: actionTypes.GET_CURRENT_SESSION,
  payload,
});

export const fetchLocation = (payload) => ({
  type: actionTypes.GET_CURRENT_LOCATION,
  payload,
});

export const fetchAllLocations = (payload) => ({
  type: actionTypes.FETCH_ALL_LOCATIONS,
  payload,
});

export const setCurrentOpenMrsLocation = (payload) => ({
  type: actionTypes.SET_OPENMRS_LOCATION,
  payload,
});

export const setCurrentLocation = (location) => ({
  type: actionTypes.SET_CURRENT_LOCATION,
  location,
});

export const logout = (payload) => ({
  type: actionTypes.GET_LOGOUT_URL,
  payload,
});

export const setOpenMRSLocation = (locationUuid) => {
  return (dispatch) => {
    return apiHelper
      .post('v1/appui/session', {'location' : locationUuid})
      .then(response => dispatch(setCurrentOpenMrsLocation(response)))
      .catch(error => dispatch(apiCallError(error)));
  };

};

export const currentLocation = () => {
  return (dispatch) => {
    return apiHelper
      .get('v1/appui/session')
      .then(response => {
        dispatch(fetchLocations());
        return dispatch(fetchLocation(response));})
      .catch(error => dispatch(apiCallError(error)));
  };
};

export const fetchLocations = () => {
  return (dispatch) => {
    dispatch(apiCall());
    return apiHelper
      .get('/v1/location')
      .then(response => {
        dispatch(createlogOutUrl(response.data.results));
        return dispatch(fetchAllLocations(response));
      })
      .catch(error => dispatch(apiCallError(error)));
  };
};

export const currentActiveSession = () => {
  return (dispatch) => {
    dispatch(apiCall());
    return apiHelper
      .get('/v1/session')
      .then(response => {
        dispatch(currentLocation());
        return dispatch(fetchSession(response));
      })
      .catch(error => dispatch(apiCallError(error)));
  };
};

export const createlogOutUrl = (locationResponse) => {
  let currentLogOutUrl;
  locationResponse.map((location) => {
    let url = location.links[0].uri;
    let arrUrl = url.split('/');
    let applicationInUse = arrUrl[3].search('http:') == -1 ? arrUrl[3] : arrUrl[3].replace('http:', '');
    currentLogOutUrl = `/${applicationInUse}/appui/header/logout.action?successUrl=${applicationInUse}`;
    return currentLogOutUrl;
  });
  return (dispatch) => dispatch(logout(currentLogOutUrl));
};

export const loginUser = (payload) => {
  const { username, password } = payload;
  return (dispatch) => {
    dispatch(apiCall());
    const authentication = 'Basic ' + new Buffer(`${username}:${password}`).toString('base64');
    return apiHelper.get('v1/session', apiHelper.headers={ authentication })
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(error => dispatch(apiCallError(error)));
  };
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: user
  });
  user.data.authenticated ? hashHistory.push('/home') : toastr.error('Invalid username or password');
  return (dispatch) => {
    dispatch(apiCall());
    return apiHelper
      .get('/v1/session')
      .then(response => {
        dispatch(currentLocation());
        return dispatch(fetchSession(response));
      })
      .catch(error => dispatch(apiCallError(error)));
  };
};
