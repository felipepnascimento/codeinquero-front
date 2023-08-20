// initial state
const state = () => ({
  assessment: 'felipe'
})

// getters
const getters = {
  assessment: ({ assessment }) => assessment
}

// mutations
const mutations = {
  setAssessment (state, assessment) {
    state.assessment = assessment
  }
}

// actions
const actions = {
  setAssessment ({ commit }, assessment) {
    commit('setAssessment', assessment)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
