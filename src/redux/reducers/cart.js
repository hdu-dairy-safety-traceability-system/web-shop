import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
} from '../constants/ActionTypes'
const initialState = {
  addedIds: [],
  quantityById: {}
}
export default ( state = initialState, action) => {
  switch(action.type) {
  case ADD_TO_CART :
    return initialState
  case CHECKOUT_REQUEST:
    return state
  case CHECKOUT_FAILURE:
    return action.cart
  default: return {}
  }
}