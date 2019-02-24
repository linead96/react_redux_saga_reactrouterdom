import { createStore, applyMiddleware, compose } from 'redux';
import {initialState, reducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux-saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(rootSaga);
