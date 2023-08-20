import sessionApi from '@/api/session'

const state = () => ({
  selectedSession: null,
  selectedSessionId: '',
  sessions: []
})

const getters = {
  selectedSession: ({ selectedSession }) => selectedSession,
  selectedSessionId: ({ selectedSessionId }) => selectedSessionId,
  sessions: ({ sessions }) => sessions
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
  }
}

const actions = {
  setSelectedSession ({ state, commit }, id) {
    const selectedSession = state.sessions.find(session => session.id === id)
    commit('setSelectedSession', selectedSession)
    commit('setSelectedSessionId', id)
  },
  setSessions ({ commit }, sessions) {
    commit('setSessions', sessions)
  },
  async getAllSessions ({ commit }) {
    const email = 'breno.pereira@quero.com'
    const { data } = await sessionApi.get(email)
    const { sessions } = data
    commit('setSessions', sessions)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
