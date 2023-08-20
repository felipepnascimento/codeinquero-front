<template>
  <div class="questions-wrapper" v-if="this.questions.length > 0">
    <div>
      <span class="text-h7">Pergunta {{ questionNumber }} de {{ this.questions.length }}</span>
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
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters('session', ['sessions', 'selectedSession']),
    questions () {
      return this.selectedSession.assessment.questions
    },
    selectedQuestion () {
      return this.questions[0]
    }
  },
  methods: {
    setSelectedQuestion (question, questionNumber) {
      this.selectedQuestion = question
      this.questionNumber = questionNumber
    }
  },
  data () {
    return {
      selectedPanel: 0,
      questionNumber: 1
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
