import React from 'react';
import { render } from 'react-dom';
import configureStore  from './store/createStore';
import { Provider } from 'react-redux';
import Presentation from './containers/Presentation';

const store = configureStore();

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <Presentation />
  </Provider>,
  rootEl
);
