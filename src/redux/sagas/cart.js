
import {put, call, select, takeEvery} from 'redux-saga/effects'

import{
  CART_ADD_PRESENT_REQ,
  CART_GET_ALL_REQ,
  CART_PRESENT_CHANGE_REQ,
  CART_MAKE_ORDER_REQ,
} from '../constants/ActionTypes'
import{
  updateCart,
  mergeCart,
  makeOrderSucc,
}from '../actions'
import {
  addToCart as addPresentToCart,
  all as getAll,
  cartUpdateReq
} from '@/network/cart'
import {getSelectedPresents} from '../reducers/cart'
import {purchase} from '@/network/cart'

export function* addToCart(action) {
  try {
    const requestData = {
      id: action.payload.id,
      count: 1
    }
    const resp = yield call(addPresentToCart, requestData)
    if (resp.data.state == 1) {
      action.payload.count = 1
      yield put(mergeCart(action.payload))
    } else {
      // error handle
    }
  } catch (e) {
    // error handle
    console.log(e)
  }
}

export function* watchAddToCart() {
  yield takeEvery(CART_ADD_PRESENT_REQ, addToCart)
}


export function* cartGetAll() {
  try {
    const resp = yield getAll()
    yield put(mergeCart(resp.data))
  } catch (e) {
    // error handle
    console.log(e)
  }
}

export function* watchGetAllCart() {
  yield takeEvery(CART_GET_ALL_REQ, cartGetAll)
}


export function* makeOrder() {
  try{
    const presents = yield select(getSelectedPresents)
    const resp = yield purchase(presents)
    // console.log(resp)
    yield put(makeOrderSucc())
  } catch(e) {
    console.log(e)
  }
}

export function* watchMakeOrder() {
  yield takeEvery(CART_MAKE_ORDER_REQ, makeOrder)
}


export function* cartChange(action) {
  // CART_PRESENTS_CHANGE_REQ
  try{
    const resp = yield cartUpdateReq(action.payload)
    yield put(updateCart(action.payload))
  } catch(e) {
    console.log(e)
  }
}

export function* watchCartChange() {
  yield takeEvery(CART_PRESENT_CHANGE_REQ, cartChange)
}