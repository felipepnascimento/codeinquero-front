<template>
  <div class='assessment-report-wrapper'>
    <div class="assessment-row">
      <p class="text-h5">Prova finalizada!</p>
      <!-- <p class="text-h5">Nota: {{grade}}/100</p> -->
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="20"
        :value="grade"
        :color="gradeColor"
      >
        <span class="text-h4">{{grade}}</span>
      </v-progress-circular>
    </div>
    <div class="assessment-row" v-if="studyPlans.length">
      <p class="text-h6">Já temos um plano de estudo pra você:</p>
      <StudyPlan :studyPlans="studyPlans"/>
    </div>
    <div class="assessment-row" v-else>
      <p class="text-h6">Parabéns, você acertou todas as questões, continue assim!</p>
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
  computed: {
    gradeColor () {
      if (this.grade >= 70) {
        return 'green'
      }
      if (this.grade >= 50) {
        return 'primary'
      }
      return 'red'
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

.assessment-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: center;
}

</style>
