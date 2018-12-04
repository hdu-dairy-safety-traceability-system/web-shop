import { take, put, call, fork, select, takeEvery,takeLatest, all } from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import userLogin from '@/network/user/login'
import {addToCart as addPresentToCart, mergeCart} from '@/network/cart'
import {refresh} from '@/network/presents'
import {selectPresent} from '../reducers'

import watchAddToCart from './cart'
import watchLogin from './login'

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
    
    const resp = yield call(refresh, action.payload)
    const payload = {
      list: resp.data.presents,
      type: action.payload.type
    }
    
    if (present.type === action.payload.type
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