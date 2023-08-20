<template>
  <div class="question-wrapper">
    <v-expansion-panel-header>
      {{  question.name  }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      {{  question.question }}
    </v-expansion-panel-content>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  components: {
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
