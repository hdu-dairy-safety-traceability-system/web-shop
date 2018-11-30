import { take, put, call, fork, select, takeEvery,takeLatest, all } from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import userLogin from '@/network/user/login'
import {refresh} from '@/network/presents'
import {selectPresent} from '../reducers'

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

export function* getPresent(action) {
  try{
    const present = yield select(selectPresent)
    if(action.payload === undefined) {
      const {
        type,
        order,
      } = present
      action.payload = {type,order}
    }
    const resp = yield call(refresh, action.payload)
    const payload = {
      list: resp.data.presents,
      type: action.payload.type
    }
    if (present.type === action.payload.type) {
      // append
      yield put(actions.mergePresents(payload))
    } else {
      // reinit
      yield put(actions.initPresents(payload))
    }
  }catch(err) {
    console.log(err)
  }
}

export function* watchPresentRefresh() {
  while(true) {
    const action = yield take(types.PRESENT_REFRESH)
    yield call(getPresent, action)
  }
}

export default function* root() {
  yield all([fork(watchLogin), fork(watchPresentRefresh)])
}