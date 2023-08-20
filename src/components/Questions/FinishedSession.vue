<template>
  <div class='assessment-report-wrapper'>
    <div class="header">
      <p class="text-h5">Prova finalizada!</p>
      <p class="text-h5">Nota: {{grade}}/100</p>
    </div>
    <div v-if="studyPlans.length">
      <p class="text-h7">Já temos um plano de estudo pra você:</p>
      <StudyPlan :studyPlans="studyPlans"/>
    </div>
    <div v-else>
      <p class="text-h7">Parabéns, você acertou todas as questões, continue assim!</p>
    </div>
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
  },
  mounted () {
    console.log(this.studyPlans)
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
