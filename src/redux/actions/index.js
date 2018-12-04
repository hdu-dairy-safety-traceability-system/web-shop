import {
  CART_ADD_PRESENT,
  CART_GET_ALL,
  CART_PRESENTS_CHANGE,
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

export function updateCartItemState(payload) {
  return {
    type: CART_PRESENTS_CHANGE,
    payload,
  }
}

export function addToCart(payload) {
  return {
    type: CART_ADD_PRESENT,
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
    type: CART_GET_ALL,
  }
}

export function getCartById(id) {
  return store.getState().cart.cart.find(item => item.id == id)
}