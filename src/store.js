import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import actions from './reducers/answer'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default createStoreWithMiddleware(actions)
