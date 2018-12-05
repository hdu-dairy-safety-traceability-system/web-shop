import {fork, all} from 'redux-saga/effects'

import {
  watchAddToCart,
  watchGetAllCart,
  watchMakeOrder,
  watchCartChange
} from './cart'
import {watchLogin} from './login'
import {watchPresentRefresh} from './present'

export default function* root() {
  yield all([
    fork(watchAddToCart),
    fork(watchCartChange),
    fork(watchGetAllCart),
    fork(watchLogin),
    fork(watchPresentRefresh),
    fork(watchMakeOrder),
  ])
}