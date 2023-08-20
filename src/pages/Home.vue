<template dark>
  <div class="home">
    <div class="home-row">
      <h1 class="header">
        {{ this.h1text }}
      </h1>
      <h1 v-if="this.blinking" class="blinking">
        _
      </h1>
    </div>
    <div class="home-row">
      <h2 class="header2">
        {{ this.h2text }}
      </h2>
      <h2 v-if="this.blinking2" class="blinking2">
        _
      </h2>
    </div>
    <div>
      <v-btn
        v-if="this.enableButton"
        @click="navigate"
        elevation="5"
        rounded
        x-large
      >
      Realizar minha prova
      <v-icon
        right
        large
      >
        mdi-rocket-launch
      </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import NewAssessmentModal from '@/components/NewAssessment/Modal'

export default {
  name: 'Home',
  components: {
    NewAssessmentModal
  },
  mounted () {
    this.writeH1Animated('Bem vindo ao Study Bro!')
  },
  data () {
    return {
      h1text: '',
      h2text: '',
      blinking: false,
      blinking2: false,
      enableButton: false
    }
  },
  methods: {
    navigate () {
      this.$router.push({ path: '/app', query: { start: 'true' } })
    },
    async writeH1Animated (text) {
      const intervalId = setInterval(() => {
        this.blinking = !this.blinking
      }, 100)

      this.h1text = ''
      const words = text.split('')
      words.forEach((word, i) => {
        setTimeout(() => {
          this.h1text = (this.h1text || '') + '' + word
          if (i === words.length - 1) {
            clearInterval(intervalId)
            this.blinking = false
            setTimeout(() => {
              this.writeH2Animated('Vamos começar?')
            }, 1500)
          }
        }, i * 100)
      })
    },
    async writeH2Animated (text) {
      const intervalId = setInterval(() => {
        this.blinking2 = !this.blinking2
      }, 100)

      this.h2text = ''
      const words = text.split('')
      words.forEach((word, i) => {
        setTimeout(() => {
          this.h2text = (this.h2text || '') + '' + word
          if (i === words.length - 1) {
            clearInterval(intervalId)
            this.blinking2 = false
            setTimeout(() => {
              this.enableButton = true
            }, 1000)
          }
        }, i * 100)
      })
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #0d3854;
  min-height: 100vh;
  min-width: 100vh;
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-row {
  display:flex;
  direction:row;
  margin-bottom: 24px
}
.header {
  font-family: 'Courier New', Courier, monospace;
  font-size: 64px;
  color: #fff;
}
.blinking {
  font-family: 'Courier New', Courier, monospace;
  font-size: 64px;
  color: #cec6c6;
}
.header2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 48px;
  color: #fff;
}
.blinking2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 48px;
  color: #cec6c6;
}
</style>
