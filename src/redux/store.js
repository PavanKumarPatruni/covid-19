import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import allSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer(), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(allSagas);
  return store;
};

export default configureStore;
