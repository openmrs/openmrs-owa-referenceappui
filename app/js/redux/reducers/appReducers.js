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

export default (state=initialState.APP_INIITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.FETCHING_APPS:
    return {...state,
      loading : true,
    };
  case actionTypes.FETCH_APPS_FULFILLED:
    return {...state,
      loading : false,
      appList: action.payload.data.results,
    };
  case actionTypes.SET_VIEW:
    return {...state,
      loading : false,
      setClassicView: !state.setClassicView,
    };
  case actionTypes.GET_NOTIFICATIONS:
    return {...state,
      loading : false,
      notifications: action.payload.data.results,
    };
  case actionTypes.ASYNC_ERROR:
    return {...state,
      loading : false,
      apiSyncError: action.error,
    };
  default:
    return state;
  }
};
