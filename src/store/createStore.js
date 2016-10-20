import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {

  const loggerMiddleware = createLogger();
  const createStoreWithMiddleWare = applyMiddleware(
    loggerMiddleware
  )(createStore);

  const store = createStoreWithMiddleWare(rootReducer, initialState);

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
