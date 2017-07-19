import axios from 'axios'
import CONSTANTS from '../config/constants'

const { XGBAPIBASE } = CONSTANTS

const instance = axios.create({
  baseURL: XGBAPIBASE,
  timeout: 60000,
  headers: {}
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export function getMessage (id) {
  return instance.get('/api/pc/msg/' + id)
}