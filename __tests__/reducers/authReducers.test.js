import authReducers from '../../app/js/redux/reducers/authReducers';

import * as actionTypes from '../../app/js/redux/constants/actionTypes';



describe('Auth Reducers', () => {
  it('should update the store when ASYNC_LOADING is called', () => {
    const INITIAL_STATE = {
      loading: false,
    };
    const action = {
      type: actionTypes.ASYNC_LOADING,
      loading: true
    };
    const newState = authReducers(INITIAL_STATE , action);
    expect(newState.loading).toEqual(true);
  });
});