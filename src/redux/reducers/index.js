import {combineReducers} from 'redux'
import cart from './cart'
import present from './present'
import login from './login'

export function getLoginState(state) {
  return state.login
}
export function selectPresent(store) {
  return store.present
}
export default combineReducers({
  cart,
  present,
  login,
})