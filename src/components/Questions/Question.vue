<template>
  <div :class="`question-wrapper ${this.correct && 'correct'}`">
    <v-expansion-panel-header>
      {{  index  }}) {{  question.statement  }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-radio-group column>
        <v-radio
          v-for="alternative in question.alternatives"
          :key="alternative.id"
          :label="alternative.description"
          :value="alternative.id"
          @click="setSelectedAlternative(alternative.id)"
        ></v-radio>
      </v-radio-group>
      <div class="helper-section">
        {{  helperText  }}
      </div>
      <div class="actions-section">
        <v-btn outlined @click="showTip()">
          Quero uma dica
        </v-btn>
        <v-btn
          :disabled="!selectedAlternative"
          color="primary"
          @click="submitAnswer()"
        >
          Submeter resposta
        </v-btn>
      </div>
    </v-expansion-panel-content>
  </div>
</template>

<style scoped>
.question-wrapper.correct {
  background-color: #ceefd0;
}

.helper-section {
  min-height: 36px;
  margin-bottom: 8px;
}
.actions-section {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import questionApi from '@/api/question'

export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    sessionId: {
      type: String,
      required: false
    }
  },
  components: {
  },
  methods: {
    writeHelperText (tip) {
      this.helperText = ''
      const words = tip.split(' ')
      words.forEach((word, i) => {
        setTimeout(() => {
          this.helperText = (this.helperText || '') + ' ' + word
        }, i * 150)
      })
    },
    showTip () {
      const activeTipIndex = this.activeTipIndex !== null ? this.activeTipIndex + 1 : 0
      if (!this.question.tips[activeTipIndex]) {
        this.helperText = 'Acabaram as dicas.'
      } else {
        this.activeTipIndex = activeTipIndex
        this.writeHelperText(this.question.tips[activeTipIndex].description)
      }
    },
    async submitAnswer () {
      const { data } = await questionApi.submitAnswer(this.sessionId, this.question.id, this.selectedAlternative)
      this.correct = data.correct
      if (data.correct) {
        this.writeHelperText(`Parabéns, você acertou! Raciocínio: ${data.reasoning}`)
      } else {
        this.writeHelperText(`Você error. Entenda o raciocínio: \n ${data.reasoning}`)
      }
    },
    setSelectedAlternative (alternativeId) {
      this.selectedAlternative = alternativeId
    }
  },
  data () {
    return {
      activeTipIndex: null,
      helperText: '',
      selectedAlternative: null,
      correct: null
    }
  }
}
</script>
<style scoped>
</style>
