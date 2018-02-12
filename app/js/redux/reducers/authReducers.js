/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */

// Because of the "import *" in redux-store each exported function will control a its own field in the global state

// For example this placeholder function will set your redux state to be { replaceThis: {} } upon the first action

import * as initialState from '../constants/initialState';
import * as actionTypes from '../constants/actionTypes';

export default (state=initialState.INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ASYNC_LOADING:
      return {...state,
        loading : true,
      }
    case actionTypes.GET_CURRENT_SESSION:
      return {...state,
        loading : false,
        sessionResponse: action.payload.data,
        currentUser: action.payload.data.user.display,
      }
    case actionTypes.GET_CURRENT_LOCATION:
      return {...state,
        loading : false,
        locationResponse: action.payload.data.results,
        currentLocation: action.payload.data.results[0].display,
      }
    case actionTypes.SET_CURRENT_LOCATION:
      return {...state,
        loading : false,
        currentLocation: action.location
      }
    case actionTypes.SET_OPENMRS_LOCATION:
      return {...state,
        loading : false,
        setLocationResponse: action.payload.data
      }
    case actionTypes.GET_LOGOUT_URL:
      return {...state,
        loading : false,
        customLogoutURL: action.payload
      }
    case actionTypes.ASYNC_ERROR:
      return {...state,
        loading : false,
        apiSyncError: action.error,
      }
    default:
      return state
  }
}
