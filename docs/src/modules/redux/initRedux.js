import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import themeReducer from 'docs/src/modules/redux/themeReducer';
import optionsReducer from 'docs/src/modules/redux/optionsReducer';


let devtools = x => x;

if (
  process.env.NODE_ENV !== 'production' &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(initialState) {
  let middleware = [];

  if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    !window.__REDUX_DEVTOOLS_EXTENSION__ &&
    Object.assign // redux logger needs this feature
  ) {
    // eslint-disable-next-line global-require
    const createLogger = require('redux-logger').createLogger;

    middleware = [...middleware, createLogger()];
  }
  return createStore(
    combineReducers({
      theme: themeReducer,
      options: optionsReducer,
    }),
    initialState,
    compose(
      applyMiddleware(...middleware),
      devtools,
    ),
  );
}

export default function initRedux(initialState) {
  // Make sure to create a new store fro every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse store on the client side
  if (!global.__INIT_REDUX_STORE__) {
    global.__INIT_REDUX_STORE__ = create(initialState);
  }
  return global.__INIT_REDUX_STORE__;
}