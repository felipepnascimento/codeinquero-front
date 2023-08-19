<template>
  <div class="questions-wrapper">
    <div>
      <span class="text-h7">Pergunta 1 de 10</span>
      <v-progress-linear value="10" color="purple" background-color="grey"></v-progress-linear>
    </div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item,i) in 10"
        :key="i"
      >
        <v-expansion-panel-header>
          Pergunta {{  i + 1  }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

export default {
  name: 'Questions',
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
.questions-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
</style>
