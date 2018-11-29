import {
  LOGIN_ACTION,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  PRESENT_MERGE,
  PRESENT_REFRESH,
  PRESENT_REINIT,
} from '../constants/ActionTypes'

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

export function mergePresents(payload) {
  console.log(payload)
  return {
    type: PRESENT_MERGE,
    payload
  }
}

export function refresh(payload) {
  return {
    type: PRESENT_REFRESH,
    payload
  }
}
export function initPresents(payload) {
  console.log(payload)
  return {
    type: PRESENT_REINIT,
    payload
  }
}