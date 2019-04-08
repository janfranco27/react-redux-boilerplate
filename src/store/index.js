import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = applyMiddleware(logger, sagaMiddleware)

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(middlewares)
)

sagaMiddleware.run(rootSaga)

export default store
