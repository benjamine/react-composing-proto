import React from 'react';
import { Map } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './containers/App';

// redux middlewares
import createDebounce from 'redux-debounce';
import createLogger from 'redux-logger';

const initialState = new Map({});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(
    createDebounce({ simple: 1000 }),
    createLogger({
      stateTransformer: state => state.toJS ? state.toJS() : state,
      actionTransformer: action => (action.payload && action.payload.toJS) ? action.payload.toJS() : action
    }),
    sagaMiddleware
  ),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));
sagaMiddleware.run(rootSaga);

export function createRoot() {
  return React.createElement(
      Provider,
      { store: store },
      React.createElement(App, null)
  );
};

export function renderRoot(domElement) {
  return render(createRoot(), domElement);
};
