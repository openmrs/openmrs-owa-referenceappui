import * as actions from '../../app/js/redux/actions/authActions';
import * as actionTypes from '../../app/js/redux/constants/actionTypes';

describe('Auth Actions', () => {
  it('should create an action to logout a user', () => {

    const payload = 'logging out';
    const expectedAction = {
      type: actionTypes.GET_LOGOUT_URL,
      payload
    }
    expect(actions.logout(payload)).toEqual(expectedAction);
  })
})