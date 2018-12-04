
import { take, put, call, fork, select, takeEvery,takeLatest, all } from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import {addToCart as addPresentToCart, mergeCart} from '@/network/cart'
import {selectPresent} from '../reducers'

export function* addToCart(action) {
  try {
    const requestData = {
      id: action.payload.id,
      count: 1
    }
    const resp = yield call(addPresentToCart, requestData)
    if (resp.data.state == 1) {
      action.payload.count = 1
      yield put(actions.mergeCart(action.payload))
    } else {
      // error handle
    }
  } catch (e) {
    // error handle
    console.log(e)
  }
}

export function* watchAddToCart() {
  yield takeEvery(types.CART_ADD_PRESENT, addToCart)
}
