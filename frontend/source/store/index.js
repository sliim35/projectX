import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  combineReducers(rootReducer),
  initialState,
  compose(
    applyMiddleware(...middleware),
    compose,
    __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);
