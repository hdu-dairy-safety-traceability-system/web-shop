import {
  CART_ADD_PERSENTS,
} from '../constants/ActionTypes'
const initialState = {
  addedIds: [],
  quantityById: {}
}
export default ( state = initialState, action) => {
  switch(action.type) {
  case CART_ADD_PERSENTS:
    return initialState
  default: return {}
  }
}