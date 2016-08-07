import { combineReducers } from 'redux-immutable';
// import { combineReducers } from 'redux';
import userSelect from './user-select';
import user from './user';

const reducers = combineReducers({
  userSelect,
  user
});

export default reducers;
