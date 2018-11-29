import request from './base'
import curry from '@/utils/curry'
export function refresh(params) {
  // haha complex sentence (^.^)
  return (curry(request.get, '/presents'))({params})
}