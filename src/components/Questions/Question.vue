<template>
  <div class="question-wrapper">
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
      <div class="tip-section">
        {{  activeTipText  }}
      </div>
      <div class="actions-section">
        <v-btn @click="showTip()">
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
.tip-section {
  height: 36px;
}
.actions-section {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
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
    }
  },
  components: {
  },
  methods: {
    writeActiveTipAnimated (tip) {
      const words = tip.split(' ')
      words.forEach((word, i) => {
        setTimeout(() => {
          this.activeTipText = (this.activeTipText || '') + ' ' + word
        }, i * 150)
      })
    },
    showTip () {
      console.log('this.activeTipIndex', this.activeTipIndex)
      const activeTipIndex = this.activeTipIndex !== null ? this.activeTipIndex + 1 : 0
      console.log('activeTipIndex', activeTipIndex)
      if (!this.question.tips[activeTipIndex]) {
        this.activeTipText = 'Acabaram as dicas.'
      } else {
        this.activeTipText = ''
        this.activeTipIndex = activeTipIndex
        this.writeActiveTipAnimated(this.question.tips[activeTipIndex].description)
      }
    },
    submitAnswer () {
      console.log('Enviar resposta', this.selectedAlternative)
    },
    setSelectedAlternative (alternativeId) {
      this.selectedAlternative = alternativeId
    }
  },
  data () {
    return {
      activeTipIndex: null,
      activeTipText: '',
      selectedAlternative: null
    }
  }
}
</script>
<style scoped>
</style>
