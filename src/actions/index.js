import { createAction } from 'redux-actions';

export const userQueryChanged = createAction('USER_QUERY_CHANGED',
  undefined, () => ({ debounce: 'simple' }));
export const fetchingUser = createAction('FETCHING_USER');
export const fetchFailedUser = createAction('FETCH_FAILED_USER');
export const fetchedUser = createAction('FETCHED_USER');
