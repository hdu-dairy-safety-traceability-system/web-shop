import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

export default createStore(
  reducer,
  // applyMiddleware(
  //   createSagaMiddleware(saga)
  // )
)