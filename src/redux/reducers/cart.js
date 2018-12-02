import {
  CART_ADD_PRESENTS,
} from '../constants/ActionTypes'
const initialState = {
  cart: [
    // {
    //   id: 0,
    //   count: 0,
    // }
  ],
}
export default ( state = initialState, action) => {
  switch(action.type) {
  case CART_ADD_PRESENTS:
    return initialState
  default: 
    return state
  }
}