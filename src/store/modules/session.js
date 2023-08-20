import sessionApi from '@/api/session'

const state = () => ({
  selectedSession: null,
  sessions: []
})

const getters = {
  selectedSession: ({ selectedSession }) => selectedSession,
  sessions: ({ sessions }) => sessions
}

const mutations = {
  setSelectedSession (state, selectedSession) {
    state.selectedSession = selectedSession
  },
  setSessions (state, sessions) {
    state.sessions = sessions
  }
}

const actions = {
  setSelectedSession ({ commit }, selectedSession) {
    commit('setSelectedSession', selectedSession)
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
