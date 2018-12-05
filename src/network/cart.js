import request from './base'
import curry from '@/utils/curry'

// TODO Get user_id from store
export const all = curry(request.get, '/users/123/cart')

export function addToCart(present) {
  return (curry(request.post,'/user/123/cart', present)(present))
}

export function purchase(presents) {
  return (curry(request.post,'/purchase',presents)(presents))
}

export function cartUpdateReq(changes) {
  return (curry(request.post, '/user/123/cart', changes)(changes))
}