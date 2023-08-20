<template>
  <div class='assessment-report-wrapper'>
    <div class="header">
      <p class="text-h5">Parabéns! Prova finalizada!</p>
      <p class="text-h5">Nota: {{grade}}/100</p>
    </div>
    <p class="text-h7">Já temos um plano de estudo pra você:</p>
    <StudyPlan :studyPlans="studyPlans"/>
  </div>
</template>
<script>
import StudyPlan from './StudyPlan'

export default {
  name: 'FinishedSession',
  components: {
    StudyPlan
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
