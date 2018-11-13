import axios from 'axios'
import Qs from 'qs'
import api from '@/network/api'

const baseURL = api.root 

export default axios.create({
  baseURL: baseURL,
  paramsSerializer: function(params) {
    return Qs.stringify(params)
  },
  // timeout: 2000,
  responseType: 'json',
  responseEncoding: 'utf8',
})