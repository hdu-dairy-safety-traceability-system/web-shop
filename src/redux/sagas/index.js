import {fork, all} from 'redux-saga/effects'

import {watchAddToCart, watchGetAllCart} from './cart'
import {watchLogin} from './login'
import {watchPresentRefresh} from './present'

export default function* root() {
  yield all([
    fork(watchLogin),
    fork(watchPresentRefresh),
    fork(watchAddToCart),
    fork(watchGetAllCart)
  ])
}