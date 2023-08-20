import http from './http'

export default {
  submitAnswer (sessionId, questionId, alternativeId) {
    return http.put(`session/${sessionId}/question/${questionId}`, { alternativeId })
  }
}
