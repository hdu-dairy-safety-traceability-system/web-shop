import request from './base'
import curry from '@/utils/curry'

export function crateComment(data) {
  
  return (curry(request.post, '/comment')(data))
} 