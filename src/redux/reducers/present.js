import {
  PRESENT_MERGE,
  PRESENT_REINIT,
  PRESENT_FILITER,
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
    // if(state.list.length !== 0) {
    //   notInList = action.payload.list.filter(
    //     item => state.list.find( present => present.id != item.id ) === -1
    //   )
    // }
    console.log(state.list, notInList)
    /* eslint no-debugger: "off" */
    // debugger
    return {
      list: [...state.list, ...notInList],
      type: action.payload.type,
      order: action.payload.order,
    }
  }
  case PRESENT_FILITER: {
    const {min, max} = action.payload
    console.log(action.payload)
    const filtedP = state.list.filter(
      (present) => present.price >= min && present.price <= max
    )
    // console.log(filtedP)
    return {
      ...state,
      list: filtedP
    }
  }
  default:
    return state
  }
}