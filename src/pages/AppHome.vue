<template>
  <v-app>
    <v-navigation-drawer app color="primary">
      <v-list dense nav dark>
        <v-list-item-title @click="navigate()" class="text-h6 list-item-title">
          Study Bro
        </v-list-item-title>
      </v-list>

      <Sessions />
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-toolbar-title v-if="selectedSession">
        {{ selectedSession.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <NewAssessmentModal />
    </v-app-bar>

    <v-main>
      <v-container>
        <Questions v-if="selectedSession" :session-id="selectedSessionId" />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Sessions from '@/components/Sessions'
import NewAssessmentModal from '@/components/NewAssessment/Modal'
import Questions from '@/components/Questions/Questions'
import { mapGetters } from 'vuex'

export default {
  name: 'AppHome',
  components: {
    Sessions,
    NewAssessmentModal,
    Questions
  },
  computed: {
    ...mapGetters('session', ['selectedSession', 'selectedSessionId'])
  },
  methods: {
    navigate () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.list-item-title {
  cursor: pointer
}
</style>
