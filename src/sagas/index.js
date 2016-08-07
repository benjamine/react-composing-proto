
import * as actions from '../actions';
import { takeLatest } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import { fetchUser } from '../services/github-api';

function * loadUser(action) {
  try {
    yield put(actions.fetchingUser(action.payload));
    const user = yield call(fetchUser, action.payload);
    yield put(actions.fetchedUser(user));
  } catch (err) {
    yield put(actions.fetchFailedUser(err));
  }
}

function * watchFetchUser() {
  yield * takeLatest(actions.userQueryChanged.toString(), loadUser);
}

export default function * rootSaga() {
  // fork to start the watchers in parallel
  yield fork(watchFetchUser);
};
