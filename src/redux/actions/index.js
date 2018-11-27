import {USER_LOGIN, LOGIN_FAILED,LOGIN_SUCCESS} from '../constants/ActionTypes'

export const getAllProducts = () => {
  console.log('getAllProducts')
}
export function login(payload) {
  return {type: USER_LOGIN, payload}
}
export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export function loginFailed(payload) {
  return {
    type: LOGIN_FAILED,
    payload
  }
}