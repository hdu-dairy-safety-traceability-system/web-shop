import request from './base'
import curry from '@/utils/curry'
import { getUserId } from '../redux/actions'
// TODO Get user_id from store
export function all() {
  const userId = getUserId()
  return (curry(request.get, `/user/${userId}/cart`))()
}

export function addToCart(present) {
  const userId = getUserId()
  return (curry(request.post, `/user/${userId}/cart`, present)(present))
}

export function cartUpdateReq(changes) {
  const userId = getUserId()
  return (curry(request.put, `/user/${userId}/cart/${changes.id}`, changes)(changes))
}

export function purchase(presents) {
  return (curry(request.post, '/purchase', presents)(presents))
}