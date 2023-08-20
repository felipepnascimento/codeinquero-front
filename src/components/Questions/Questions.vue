<template>
  <div class="questions-wrapper" v-if="this.questions.length > 0">
    <div>
      <span class="text-h7">Pergunta {{ selectedQuestion.index + 1 }} de {{ this.questions.length }}</span>
    </div>
    <v-expansion-panels v-model="selectedPanel">
      <v-expansion-panel
        v-for="(question, i) in questions"
        :key="question.name"
        @click="setSelectedQuestion(question, i + 1)"
      >
        <Question :question="question" :index="i + 1" :session-id="sessionId" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

import Question from './Question'
import sessionApi from '@/api/session'

export default {
  name: 'Questions',
  components: {
    Question
  },
  props: {
    sessionId: {
      type: String,
      required: false,
      default: 'teste-uuid'
    }
  },
  async mounted () {
    const { data } = await sessionApi.getById(this.sessionId)
    this.questions = data.assessment.questions.map((q, index) => ({ ...q, index }))
    this.selectedQuestion = this.questions[0]
  },
  methods: {
    setSelectedQuestion (question) {
      this.selectedQuestion = question
    }
  },
  data () {
    return {
      selectedPanel: 0,
      questions: [],
      selectedQuestion: null
    }
  }
}
</script>
<style scoped>
.questions-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 0 48px;
}
</style>
