import { ADD_TO_CART } from '../constants/ActionTypes'

export default function(state, action) {
  switch(action.type) {
  case ADD_TO_CART:
    return state
  default: return {}
  }
}