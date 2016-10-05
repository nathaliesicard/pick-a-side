
import { combineReducers } from 'redux'
import balance from './balance';
import history from './history'

const reducers = combineReducers({
  balance,
  history
})

export default reducers