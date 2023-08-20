import sessionApi from '@/api/session'

const state = () => ({
  selectedSession: null,
  selectedSessionId: '',
  sessions: [],
  finishedSession: false
})

const getters = {
  selectedSession: ({ selectedSession }) => selectedSession,
  selectedSessionId: ({ selectedSessionId }) => selectedSessionId,
  sessions: ({ sessions }) => sessions,
  finishedSession: ({ finishedSession }) => finishedSession
}

const mutations = {
  setSelectedSession (state, selectedSession) {
    state.selectedSession = selectedSession
  },
  setSelectedSessionId (state, selectedSessionId) {
    state.selectedSessionId = selectedSessionId
  },
  setSessions (state, sessions) {
    state.sessions = sessions
  },
  setFinishedSession (state, finishedSession) {
    state.finishedSession = finishedSession
  }
}

const actions = {
  setSelectedSession ({ state, commit }, id) {
    const selectedSession = state.sessions.find(session => session.id === id)
    commit('setSelectedSession', selectedSession)
    commit('setSelectedSessionId', id)
    commit('setFinishedSession', false)
  },
  setSessions ({ commit }, sessions) {
    commit('setSessions', sessions)
  },
  async getAllSessions ({ commit }) {
    const email = 'breno.pereira@quero.com'
    const { data } = await sessionApi.get(email)
    const { sessions } = data
    commit('setSessions', sessions)
  },
  setFinishedSession ({ commit }, finishedSession) {
    commit('setFinishedSession', finishedSession)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
