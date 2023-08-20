<template>
  <div class="questions-wrapper">
    <div>
      <span class="text-h7">Pergunta {{ selectedQuestion.index }} de 10</span>
    </div>
    <v-expansion-panels v-model="selectedPanel">
      <v-expansion-panel
        v-for="(question, i) in questions"
        :key="question.name"
        @click="setSelectedQuestion(question, i + 1)"
      >
        <Question :question="question" :index="i + 1" />
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
        id: question.id,
        index
      }
    }
  },
  data () {
    return {
      selectedPanel: 0,
      questions: [{
        id: 'teste-uuid1',
        statement: 'Qual é a equação da reta que passa pelos pontos A(2, 3) e B(5, 7)?',
        alternatives: [
          {id: 'teste-uuid1', description: 'a) y = 2x + 1'},
          {id: 'teste-uuid2', description: 'b) y = 2x + 1'},
          {id: 'teste-uuid3', description: 'c) y = 2x + 1'},
          {id: 'teste-uuid4', description: 'd) y = 2x + 1'},
          {id: 'teste-uuid5', description: 'e) y = 2x + 1'}
        ],
        tips: [
          {id: 'teste-uuid1', description: 'Lembre-se da fórmula da equação da reta: y = mx + b.'},
          {id: 'teste-uuid2', description: 'Lembre-se da fórmula da equação da reta: y = mx + b.'},
          {id: 'teste-uuid3', description: 'Lembre-se da fórmula da equação da reta: y = mx + b.'}
        ],
        correctAlternative: 'teste-uuid',
        reasoning: '...'
      },
      {
        id: 'teste-uuid2',
        statement: 'Qual é a equação da reta que passa pelos pontos A(2, 3) e B(5, 7)?',
        alternatives: [
          {id: 'teste-uuid1', description: 'a) y = 2x + 1'},
          {id: 'teste-uuid2', description: 'b) y = 2x + 1'},
          {id: 'teste-uuid3', description: 'c) y = 2x + 1'},
          {id: 'teste-uuid4', description: 'd) y = 2x + 1'},
          {id: 'teste-uuid5', description: 'e) y = 2x + 1'}
        ],
        tips: [{id: 'teste-uuid1', description: 'Lembre-se da fórmula da equação da reta: y = mx + b.'}],
        correctAlternative: 'teste-uuid',
        reasoning: '...'
      }],
      selectedQuestion: {
        id: 'teste-uuid1',
        index: 1
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
