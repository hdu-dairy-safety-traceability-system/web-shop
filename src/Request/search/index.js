import request from '@/Request/base'
import curry from '@/Utils/curry'
export default curry(request.post, '/search')