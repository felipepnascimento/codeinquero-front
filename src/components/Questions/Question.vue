<template>
  <div class="question-wrapper">
    <v-expansion-panel-header>
      {{  index  }}) {{  question.statement  }}
      <template v-slot:actions>
        <v-icon v-if="correct" color="teal">
          mdi-check-circle
        </v-icon>
        <v-icon v-else-if="correct === false" color="error">
          mdi-alert-circle
        </v-icon>
        <v-icon v-else>
          $expand
        </v-icon>
      </template>
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
      <div :class="`helper-section ${this.helperKind}`">
        {{  helperText  }}
      </div>
      <div class="actions-section">
        <v-btn outlined @click="showTip()">
          Me ajuda!
        </v-btn>
        <v-btn
          :disabled="!selectedAlternative"
          color="primary"
          @click="submitAnswer()"
          :loading="loading"
        >
          Submeter resposta
        </v-btn>
      </div>
    </v-expansion-panel-content>
  </div>
</template>

<style scoped>
.helper-section {
  min-height: 36px;
  margin-bottom: 16px;
  padding: 15px;
  font-family: monospace;
  visibility: hidden;
}

.helper-section.answer {
  visibility: visible;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #f0f0f0;
}
.helper-section.tip {
  visibility: visible;
  background: #343541;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #ffffff;
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
  methods: {
    writeHelperText (tip) {
      this.helperText = ''
      const words = tip.split('')
      words.forEach((word, i) => {
        setTimeout(() => {
          this.helperText = (this.helperText || '') + '' + word
        }, i * 30)
      })
    },
    showTip () {
      const activeTipIndex = this.activeTipIndex !== null ? this.activeTipIndex + 1 : 0
      this.helperKind = 'tip'
      if (!this.question.tips[activeTipIndex]) {
        this.helperText = 'Acabaram as dicas.'
      } else {
        this.activeTipIndex = activeTipIndex
        this.writeHelperText(this.question.tips[activeTipIndex].description)
      }
    },
    setLoading (loading) {
      this.loading = loading
    },
    async submitAnswer () {
      this.setLoading(true)
      const { data } = await questionApi.submitAnswer(this.sessionId, this.question.id, this.selectedAlternative)
      this.correct = data.correct
      this.helperKind = 'answer'
      if (data.correct) {
        this.writeHelperText(`Parabéns, você acertou! Raciocínio: ${data.reasoning}`)
      } else {
        this.writeHelperText(`Você errou. Entenda o raciocínio: \n ${data.reasoning}`)
      }
      this.setLoading(false)
    },
    setSelectedAlternative (alternativeId) {
      this.selectedAlternative = alternativeId
    }
  },
  data () {
    return {
      activeTipIndex: null,
      helperText: '',
      helperKind: null,
      selectedAlternative: null,
      correct: null,
      loading: false
    }
  }
}
</script>
