<template>
  <div class="questions-wrapper">
    <div>
      <span class="text-h7">{{ selectedQuestion.name }} de 10</span>
      <v-progress-linear :value="selectedQuestion.value" color="purple" background-color="grey"></v-progress-linear>
    </div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(question, i) in questions"
        :key="question.name"
        @click="setSelectedQuestion(question, i)"
      >
        <Question :question="question" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

import Question from './Question'

export default {
  name: 'Questions',
  components: {
    Question
  },
  computed: {

  },
  methods: {
    setSelectedQuestion (question, index) {
      this.selectedQuestion = {
        name: question.name,
        value: (index + 1) * 10
      }
    }
  },
  data () {
    return {
      questions: [{
        name: 'Pergunta 1',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 2',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 3',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 4',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 5',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 6',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 7',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 8',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 9',
        question: 'Qual é o maior país do mundo?'
      },
      {
        name: 'Pergunta 10',
        question: 'Qual é o maior país do mundo?'
      }],
      selectedQuestion: {
        name: 'Pergunta 1',
        value: 10
      }
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
