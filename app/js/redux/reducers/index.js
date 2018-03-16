import { combineReducers } from 'redux';
import authReducer from './authReducers';
import appReducer from './appReducers';

const reducer = combineReducers({
  authentication : authReducer,
  app : appReducer,
});

export default reducer;
