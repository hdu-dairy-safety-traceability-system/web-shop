import { CART_ADD_PRESENTS } from '../constants/ActionTypes'

export default function(state, action) {
  switch(action.type) {
  case CART_ADD_PRESENTS:
    return state
  default: return {}
  }
}