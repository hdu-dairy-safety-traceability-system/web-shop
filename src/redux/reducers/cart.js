import {
  CART_MERGE_PRESENT,
  CART_PRESENT_CHANGE,
  CART_MAKE_ORDER_SUCC,
  CART_RESET_STATE,
} from '../constants/ActionTypes'
const initialState = {
  cart: [
    // present objects
  ],
  order: {
    isSucc: false,
    data: []
  },
  totalPrice: 0,
}

function totalPrice(presents) {
  return presents.filter(present => !!present.selected)
    .reduce(
      (totalPrice, present) => totalPrice += present.price * present.count,
      0
    )
}
export function getSelectedPresents(store) {
  return store.cart.cart
    .filter( present => !!present.selected)
    .map( present => {
      const {
        present_id,
        count
      } = present
      return {
        id: present_id,
        count
      }
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
      ...state,
      cart: [...cart],
      totalPirce: totalPrice(cart),
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
      ...state,
      cart: [...cart],
      totalPrice: totalPrice(cart),
    }
  }
  case CART_MAKE_ORDER_SUCC:
    return {
      ...state,
      order: {
        isSucc: true, 
        data: action.payload
      },
      totalPrice: totalPrice(state.cart),
    }
  case CART_RESET_STATE:
    return {
      ...state,
      order: {
        isSucc: false,
        data: { },
      },
    }
  default: {
    return {
      ...state,
      totalPrice: totalPrice(state.cart),
    }
  }}
}