import {
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../constants/ActionTypes'
const initialState = {
  loginState: 'unlogin', // one of unlogin/success/failed
  userId: '',
  logined: false
}
export default ( state = initialState, action) => {
  switch(action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      userId: action.payload.user_id,
      logined: true,
      loginState: 'success',
    }
  case LOGIN_FAILED:
    return {
      ...state,
      ...action.payload,
      logined: false,
      loginState: 'failed'
    }
  default: 
    return state
  }
}