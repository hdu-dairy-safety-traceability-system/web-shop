import {
  CART_ADD_PRESENTS,
} from '../constants/ActionTypes'
const initialState = {
  addedIds: [],
  quantityById: {}
}
export default ( state = initialState, action) => {
  switch(action.type) {
  case CART_ADD_PRESENTS:
    return initialState
  default: 
    return state
  }
}