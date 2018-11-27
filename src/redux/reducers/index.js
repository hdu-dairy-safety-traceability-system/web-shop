import {combineReducers} from 'redux'
import cart from './cart'
import gifts from './gifts'
import login from './login'

export function getLoginState(state) {
  return state.login
}
export default combineReducers({
  cart,
  gifts,
  login,
})