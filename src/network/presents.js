import request from './base'
import curry from '@/utils/curry'
export function refresh(params) {
  // haha complex sentence (^.^)
  return (curry(request.get, '/presents'))({params})
}
export const recommend = curry(request.get, '/recommend')

export function getPresentById(id) {
  return  request.get('/present/' + id)
}