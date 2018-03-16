import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { loginUser } from '../../app/js/redux/actions/authActions'
import * as actions from '../../app/js/redux/actions/asyncActions';
import * as actionTypes from '../../app/js/redux/constants/actionTypes';
import { apiHelper } from '../../app/js/helpers/apiHelper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  it('should create LOGIN_USER and GET_CURRENT_SESSION when a user has logged in', (done) => {
    const requestData = { username: 'admin', password: 'mypassword', sessionLocation: 'laboaratory' }
    
    nock('http://localhost:3002/openmrs-standalone/owa/openmrs-owa-referenceappui/index.html')      
      .get('v1/session')
      .reply(200, { payload: requestData } );

      const expectedActions = [
        { type: actionTypes.ASYNC_LOADING },
        { type: actionTypes.GET_CURRENT_SESSION, payload:requestData }
      ]
    
      const store = mockStore({ payload: [] }, expectedActions)
      store.dispatch(loginUser(requestData)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(actionTypes.ASYNC_LOADING)
        done();
      })
    
    })
  })

