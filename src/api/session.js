import http from './http'

export default {
  get (email) {
    return http.get(`session?email=${encodeURIComponent(email)}`)
  },

  post (params) {
    return http.post('session', params)
  },

  getById (sessionId) {
    return http.get(`session/${sessionId}`)
  },

  finish (sessionId) {
    return http.put(`session/${sessionId}/finish`)
  }
}
