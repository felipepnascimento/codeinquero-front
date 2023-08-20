<template>
  <div>
    <v-expansion-panel-header>
      <span class="question-statement">
        {{  index  }}) {{  question.statement  }}
      </span>
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

      <div :class="`helper-section ${helperKind}`">
        <span v-html="helperText"></span>
        <span v-if="blinking" class="blinking">
          _
        </span>
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
    clearTimeouts () {
      this.timeoutIds.forEach(id => window.clearTimeout(id))
    },
    writeHelperText (tip) {
      this.clearTimeouts()
      this.helperText = ''

      const intervalId = setInterval(() => {
        this.blinking = !this.blinking
      }, 200)

      const words = tip.split('')
      words.forEach((word, i) => {
        const id = setTimeout(() => {
          this.helperText = (this.helperText || '') + '' + word

          if (i === words.length - 1) {
            clearInterval(intervalId)
            this.blinking = false
          }
        }, i * 40)
        this.timeoutIds.push(id)
      })
    },
    showTip () {
      const activeTipIndex = this.activeTipIndex !== null ? this.activeTipIndex + 1 : 0
      this.helperKind = 'tip'
      if (!this.question.tips[activeTipIndex]) {
        this.helperText = 'Acabaram as dicas 🥲'
      } else {
        this.activeTipIndex = activeTipIndex
        this.writeHelperText(`💡 ${this.question.tips[activeTipIndex].description}`)
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
        this.writeHelperText(`Parabéns, você acertou 🥳🥳🥳 <br/> ${data.reasoning}`)
      } else {
        this.writeHelperText(`Você errou 🥲<br/> ${data.reasoning}`)
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
      loading: false,
      timeoutIds: [],
      blinking: false
    }
  }
}
</script>
<style scoped>
.question-statement {
  font-size: 16px;
}
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
  justify-content: flex-end;
  column-gap: 16px;
}
.blinking {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  color: #cec6c6;
}
</style>
