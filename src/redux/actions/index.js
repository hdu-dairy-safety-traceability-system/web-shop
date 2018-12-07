import {
  CART_ADD_PRESENT_REQ,
  CART_GET_ALL_REQ,
  CART_PRESENT_CHANGE,
  CART_PRESENT_CHANGE_REQ,
  CART_MAKE_ORDER_REQ, 
  CART_MAKE_ORDER_SUCC,
  CART_MERGE_PRESENT,
  LOGIN_ACTION,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  PRESENT_MERGE,
  PRESENT_REFRESH,
  PRESENT_REINIT,
} from '../constants/ActionTypes'
import store from '../index.js'

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
  return {
    type: PRESENT_REINIT,
    payload
  }
}

export function updateCart(payload) {
  return {
    type: CART_PRESENT_CHANGE,
    payload,
  }
}

export function updateCartReq(payload) {
  return {
    type: CART_PRESENT_CHANGE_REQ,
    payload,
  }
}

export function addToCart(payload) {
  return {
    type: CART_ADD_PRESENT_REQ,
    payload
  }
}
export function mergeCart(payload) {
  return {
    type: CART_MERGE_PRESENT,
    payload
  }
}

export function getCart() {
  return {
    type: CART_GET_ALL_REQ,
  }
}

export function makeOrder() {
  return {
    type: CART_MAKE_ORDER_REQ,
  }
}

export function makeOrderSucc() {
  return {
    type: CART_MAKE_ORDER_SUCC
  }
}

export function getCartById(id) {
  return store.getState().cart.cart.find(item => item.id == id)
}

export function getSelectedPresents() {
  return store.getState().cart.cart.filter(present => !!present.selected)
}

export function totalPrice() {
  const sum = getSelectedPresents()
    .reduce(
      (totalPrice, present) => totalPrice += present.price * present.count,
      0
    )
  return sum
}

export function getUserId() {
  return store.getState().login.userId
}