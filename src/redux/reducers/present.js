import {
  PRESENT_MERGE,
  PRESENT_REINIT
} from '../constants/ActionTypes'

const ininalState = {
  list: [],
  type: 'composite',
  order: 'desc'
}
export default function (state = ininalState, action) {
  switch(action.type) {
  case PRESENT_REINIT: 
    return {
      ...action.payload,
      // list: [...action.payload.list], 
      // new array not refrence
      // type: action.payload.type
    }
  case PRESENT_MERGE:
    return {
      ...action.payload,
      list: [ ...state.list, ...action.payload.list],
      // type: action.payload.type
    }
  default: 
    return state
  }
}