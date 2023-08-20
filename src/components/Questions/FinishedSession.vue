<template>
  <div class='assessment-report-wrapper'>
    <div class="header">
      <p class="text-h2">Prova finalizada!</p>
      <p class="text-h4">Nota: {{grade}}/100</p>
    </div>
    <p class="text-h5">Já temos um plano de estudo pra você:</p>
    <ul
      v-for="(studyPlanItem, i) in studyPlans"
      :key="i"
    >
      <li>
        <p class="text-h5">Topico: {{studyPlanItem.topic}}</p>
        <p class="text-h6">{{studyPlanItem.description}}</p>
        <p class="text-h6">Onde encontrar: {{studyPlanItem.subject.whereFind}}</p>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'Questions',
  components: {
  },
  props: {
    grade: {
      type: Number,
      required: true
    },
    studyPlans: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
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
