<template>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(studyPlan, i) in prettyStudyPlans"
      :key="i"
      :color="studyPlan.color"
      :icon="studyPlan.icon"
      fill-dot
    >
      <v-card
        :color="studyPlan.color"
        dark
      >
        <v-card-title class="text-h6">
          {{ studyPlan.topic }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p class="text-h6">Contexto:</p>
          <p class="text-h7">{{ studyPlan.description }}</p>
          <p class="text-h6">Onde encontrar:</p>
          <p class="text-h7">{{ studyPlan.subject.whereFind }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>

export default {
  name: 'StudyPlan',
  props: {
    studyPlans: {
      type: Array,
      required: true
    }
  },
  computed: {
    prettyStudyPlans () {
      return this.handleStudyPlans()
    }
  },
  data: () => ({
    samples: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon'
      },
      {
        color: 'indigo',
        icon: 'mdi-check-circle'
      }
    ]
  }),
  methods: {
    handleStudyPlans () {
      return this.studyPlans.map(studyPlan => {
        return {
          ...studyPlan,
          ...this.getSample()
        }
      })
    },
    getSample () {
      return this.samples[Math.floor(Math.random() * this.samples.length)]
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

</style>
