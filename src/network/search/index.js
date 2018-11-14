import request from '@/network/base'
import curry from '@/utils/curry'
export default curry(request.post, '/search')