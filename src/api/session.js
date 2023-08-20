import http from './http'

export default {
  post (params) {
    return http.post('session', params)
  }
}
