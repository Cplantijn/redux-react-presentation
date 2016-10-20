import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import Presentation from './containers/Presentation';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleWare = applyMiddleware(
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleWare(reducers);

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <Presentation />
  </Provider>,
  rootEl
);
