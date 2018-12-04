import { take, put, call, fork, select, takeEvery,takeLatest, all } from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import userLogin from '@/network/user/login'

export function* login(action) {
  try{
    const loginState = yield call(userLogin, action.payload)
    if(loginState.data.log_state == 0){
      yield put(actions.loginFailed({loginState: 'failed'}))
    } else {
      yield put(actions.loginSuccess(loginState.data))
    }
  } catch(err) {
    yield put(actions.loginFailed({loginState: 'failed'}))
  }
}

export function* watchLogin() {
  yield takeLatest(types.LOGIN_ACTION, login)
}
