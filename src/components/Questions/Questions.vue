<template>
  <FinishedSession v-if="finishedSession" :grade="grade" :studyPlans="studyPlans"/>
  <div class="questions-wrapper" v-else-if="questions.length > 0">
    <div>
      <span class="text-h7">{{ `Pergunta ${questionNumber}` }} de {{ this.questions.length }}</span>
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
        :loading="loading"
      >
        Finalizar prova
      </v-btn>
    </div>
  </div>
</template>

<script>

import Question from './Question'
import FinishedSession from './FinishedSession'
import { mapGetters, mapActions } from 'vuex'
import sessionApi from '@/api/session'

export default {
  name: 'Questions',
  components: {
    Question,
    FinishedSession
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
    setLoading (loading) {
      this.loading = loading
    },
    async finishSession () {
      this.setLoading(true)
      sessionApi.finish(this.sessionId).then(({ status, data }) => {
        if (status === 200) {
          this.setFinishedSession(true)
          this.grade = Math.ceil(data.grade)
          this.studyPlans = data.studyPlans
        }
      }).catch((error) => {
        console.log(error)
        window.alert('Ocorreu um erro inesperado')
      }).finally(() => {
        this.setLoading(false)
      })
    }
  },
  data () {
    return {
      selectedPanel: 0,
      questionNumber: 1,
      finished: false,
      grade: null,
      studyPlans: [],
      loading: false
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
