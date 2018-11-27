import {USER_LOGIN, LOGIN_FAILED,UPDATE_USER_STATE} from '../constants/ActionTypes'

export const getAllProducts = () => {
  console.log('getAllProducts')
}
export function login(payload) {
  return {type: USER_LOGIN, payload}
}
export function updateUserState(data) {
  return {
    type: UPDATE_USER_STATE,
    payload: data
  }
}

export function loginErr() {
  return {
    type: LOGIN_FAILED,
  }
}