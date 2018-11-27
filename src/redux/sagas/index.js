import { take, put, call, fork, select, takeEvery,takeLatest, all } from 'redux-saga/effects'

import {USER_LOGIN,USER_LOGIN_SAGA} from '../constants/ActionTypes'
import * as actions from '../actions'
import {getLoginState} from '../reducers'
import userLogin from '@/network/user/login'

export function* login(action) {
  console.log(action)
  try{
    const loginState = yield call(userLogin, action.payload)
    
    if(loginState.data.log_state == 0)
      yield put(actions.loginErr())
    else
      yield put(actions.updateUserState(loginState.data))
  } catch(err) {
    yield put(actions.loginErr(err))
  }
}

export function* watchLogin() {
  yield takeLatest(USER_LOGIN, login)
}

export default function* root() {
  yield all([fork(watchLogin)])
}