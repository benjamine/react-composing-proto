import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { Map } from 'immutable';

const initialState = new Map({
  query: ''
});

export default handleActions({
  [actions.userQueryChanged]: (state, action) => state.set('query', action.payload)
}, initialState);
