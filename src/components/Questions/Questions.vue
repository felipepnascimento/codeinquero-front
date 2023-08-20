<template>
  <div class='assessment-report-wrapper' v-if="finishedSession">
    <div class="header">
      <p class="text-h2">Prova finalizada!</p>
      <p class="text-h4">Nota: {{this.grade}}/100</p>
    </div>
    <p class="text-h5">Já temos um plano de estudo pra você:</p>
    <ul
      v-for="(studyPlanItem, i) in this.studyPlans"
      :key="i"
    >
      <li>
        <p class="text-h5">Topico: {{studyPlanItem.topic}}</p>
        <p class="text-h6">{{studyPlanItem.description}}</p>
        <p class="text-h6">Onde encontrar: {{studyPlanItem.subject.whereFind}}</p>
      </li>
    </ul>
  </div>
  <div class="questions-wrapper" v-else-if="questions.length > 0">
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
    <div class='submit-section'>
      <v-btn
          color="primary"
          @click="finishSession()"
      >
        Finalizar prova
      </v-btn>
    </div>
  </div>
</template>

<script>

import Question from './Question'
import { mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapGetters('session', ['sessions', 'selectedSession', 'finishedSession']),
    questions () {
      return this.selectedSession.assessment.questions
    },
    selectedQuestion () {
      return this.questions[0]
    }
  },
  methods: {
    ...mapActions('session', ['setFinishedSession']),
    setSelectedQuestion (question, questionNumber) {
      this.selectedQuestion = question
      this.questionNumber = questionNumber
    },
    async finishSession () {
      const { status, data } = await sessionApi.finish(this.sessionId)
      if (status === 200) {
        this.setFinishedSession(true)
        this.grade = Math.ceil(data.grade)
        this.studyPlans = data.studyPlans
      }
    }
  },
  data () {
    return {
      selectedPanel: 0,
      questionNumber: 1,
      finished: false,
      grade: null,
      studyPlans: []
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

.submit-section {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.assessment-report-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

</style>
