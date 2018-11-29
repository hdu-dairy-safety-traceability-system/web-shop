import request from '../base'
import curry from '@/utils/curry'
export default curry(request.post, '/search')