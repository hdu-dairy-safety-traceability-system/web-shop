import {LOGIN_ACTION, LOGIN_FAILED,LOGIN_SUCCESS} from '../constants/ActionTypes'

export function login(payload) {
  return {type: LOGIN_ACTION, payload}
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