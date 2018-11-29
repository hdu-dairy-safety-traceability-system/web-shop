import axios from 'axios'
import Qs from 'qs'
import config from '@/network/config'

const baseURL = config.root 

export default axios.create({
  baseURL: baseURL,
  paramsSerializer: function(params) {
    return Qs.stringify(params)
  },
  // timeout: 2000,
  responseType: 'json',
  responseEncoding: 'utf8',
})