import {take, put, call,select} from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import {refresh} from '@/network/presents'
import {selectPresent} from '../reducers'

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
    
    // get category from query param
    let category = new URLSearchParams(location.search).get('category')
    if(category !== undefined) {
      action.payload.category = category
    }
    /*eslint no-debugger: "off"*/
    const resp = yield call(refresh, action.payload)
    console.log(resp.data)
    const payload = {
      list: resp.data,
      type: action.payload.type,
      order: action.payload.order,
    }
    // debugger
    if ( present.type === action.payload.type
      && present.order === action.payload.order) {
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