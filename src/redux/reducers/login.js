import {
  UPDATE_USER_STATE,
  USER_LOGIN
} from '../constants/ActionTypes'
const initialState = {
  loginState: false,
  username: ''
}
export default ( state = initialState, action) => {
  switch(action.type) {
  case UPDATE_USER_STATE:
    return {...state, tmp: 11}
  default: 
    return state
  }
}