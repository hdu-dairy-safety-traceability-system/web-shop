import request from './base'
import curry from '@/utils/curry'

export const all = curry(request, '/order')