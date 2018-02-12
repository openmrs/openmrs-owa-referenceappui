import { combineReducers } from 'redux';
import authReducer from './authReducers';

const reducer = combineReducers({
  authentication : authReducer,

})

export default reducer;
