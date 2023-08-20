// initial state
const state = () => ({
  selectedAssessment: null,
  assessments: []
})

// getters
const getters = {
  selectedAssessment: ({ selectedAssessment }) => selectedAssessment,
  assessments: ({ assessments }) => assessments
}

// mutations
const mutations = {
  setSelectedAssessment (state, selectedAssessment) {
    state.selectedAssessment = selectedAssessment
  },
  setAssessments (state, assessments) {
    state.assessments = assessments
  }
}

// actions
const actions = {
  setSelectedAssessment ({ commit }, selectedAssessment) {
    commit('setSelectedAssessment', selectedAssessment)
  },
  setAssessments ({ commit }, assessments) {
    commit('setAssessments', assessments)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
