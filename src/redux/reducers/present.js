import {
  PRESENT_MERGE,
  PRESENT_REINIT
} from '../constants/ActionTypes'

const ininalState = {
  list: [],
  type: 'composite',
  order: 'desc'
}
/*eslint no-debugger: "off"*/
export default function (state = ininalState, action) {
  switch(action.type) {
  case PRESENT_REINIT: 
    return {
      ...action.payload,
      // list: [...action.payload.list], 
      // new array not refrence
      // type: action.payload.type
    }
  case PRESENT_MERGE: {
    let notInList = action.payload.list
    if(state.list.length !== 0) {
      notInList = action.payload.list.filter(
        item => state.list.find(
          present => present.id != item.id
        ) === -1
      )
    }
    return {
      list: [...state.list, ...notInList],
      // type: action.payload.type
    }

  }
  default:
    return state
  }
}