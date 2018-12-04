import {
  CART_MERGE_PRESENT,
  CART_PRESENTS_CHANGE,
} from '../constants/ActionTypes'
const initialState = {
  cart: [
    // present objects
  ],
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
      cart.splice(presentIndex, 1, newCopy) // replace with new Ojbect
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
  case CART_PRESENTS_CHANGE: {
    const {payload} = action
    const {cart} = state
    const presentIndex = cart.findIndex(cartItem => cartItem.id == payload.id)
    if (presentIndex !== -1) {
      const newCopy = { ...cart[presentIndex], ...payload}
      cart.splice(presentIndex, 1, newCopy) // replace with new Ojbect
    }
    return {
      cart: [...cart],
    }
  }
  default: 
    return state
  }
}