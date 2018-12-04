
import {put, call, takeEvery} from 'redux-saga/effects'

import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import {addToCart as addPresentToCart, all as getAll} from '@/network/cart'

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

export function* cartGetAll(action) {
  try {
    const resp = yield getAll()
    yield put(actions.mergeCart(resp.data.presents))
  } catch (e) {
    // error handle
    console.log(e)
  }
}

export function* watchGetAllCart() {
  yield takeEvery(types.CART_GET_ALL, cartGetAll)
}