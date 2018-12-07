import {
  CART_MERGE_PRESENT,
  CART_PRESENT_CHANGE,
  CART_MAKE_ORDER_SUCC,
} from '../constants/ActionTypes'
const initialState = {
  cart: [
    // present objects
  ],
}

export function getSelectedPresents(store) {
  return store.cart.cart
    .filter( present => !!present.selected)
    .map( present => {
      const {id, count} = present
      return {id, count}
    })
}

function diff(cart, presents) {
  return presents.map( (present) => {
    if (!cart.find(cartItem => cartItem.id == present.id)) {
      return present
    }
  }).filter(item => !!item)
}

function changePresent(cart, payload) {
  if (Array.isArray(payload)) {
    cart.push(...diff(cart, payload))
  } else {
    const presentIndex = cart.findIndex(cartItem => cartItem.id == payload.id)
    if (presentIndex === -1) {
      cart.push(payload)
    } else {
      const newCopy = {...cart[presentIndex]}
      ++newCopy.count
      // replace with new Ojbect
      cart.splice(presentIndex, 1, newCopy) 
    }
  }
  return cart
}

export default ( state = initialState, action) => {
  switch(action.type) {
  case CART_MERGE_PRESENT: {
    const cart  = changePresent(state.cart, action.payload)
    return {
      cart: [...cart],
    }
  }
  case CART_PRESENT_CHANGE: {
    const {payload} = action
    const {cart} = state
    const presentIndex = cart.findIndex(cartItem => cartItem.id == payload.id)
    if (presentIndex !== -1) {
      const newCopy = { ...cart[presentIndex], ...payload}
      // replace with new Ojbect
      cart.splice(presentIndex, 1, newCopy) 
    }
    return {
      cart: [...cart],
    }
  }
  case CART_MAKE_ORDER_SUCC:
    return state
  default: 
    return state
  }
}