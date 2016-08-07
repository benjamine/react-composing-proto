import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { Map } from 'immutable';

const initialState = new Map({});

export default handleActions({
  [actions.fetchingUser]: (state, action) => state.merge({
    fetching: true,
    fetchError: undefined
  }),
  [actions.fetchFailedUser]: (state, action) => state.merge({
    fetching: false,
    fetchError: action.payload,
    data: undefined
  }),
  [actions.fetchedUser]: (state, action) => state.merge({
    fetching: false,
    fetchError: undefined,
    data: action.payload
  })
}, initialState);
