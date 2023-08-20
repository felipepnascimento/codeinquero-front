const state = () => ({
  selectedAssessment: null,
  assessments: []
})

const getters = {
  selectedAssessment: ({ selectedAssessment }) => selectedAssessment,
  assessments: ({ assessments }) => assessments
}

const mutations = {
  setSelectedAssessment (state, selectedAssessment) {
    state.selectedAssessment = selectedAssessment
  },
  setAssessments (state, assessments) {
    state.assessments = assessments
  }
}

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
