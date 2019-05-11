import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './Reducers/index';
import mySaga from './Sagas/watcher';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancer);
sagaMiddleware.run(mySaga);

export default store;
