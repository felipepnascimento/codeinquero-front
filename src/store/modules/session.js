// initial state
const state = () => ({
  selectedSession: {
    id: 1,
    name: 'Prova de Geometria Analitica'
  },
  sessions: [{
    id: 1,
    name: 'Prova de Geometria Analitica'
  }, {
    id: 2,
    name: 'Prova de Português'
  }]
})

// getters
const getters = {
  selectedSession: ({ selectedSession }) => selectedSession,
  sessions: ({ sessions }) => sessions
}

// mutations
const mutations = {
  setSelectedSession (state, selectedSession) {
    state.selectedSession = selectedSession
  },
  setSessions (state, sessions) {
    state.sessions = sessions
  }
}

// actions
const actions = {
  setSelectedSession ({ commit }, selectedSession) {
    commit('setSelectedSession', selectedSession)
  },
  setSessions ({ commit }, sessions) {
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
