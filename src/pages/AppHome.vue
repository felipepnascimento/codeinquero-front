<template>
  <v-app>
    <v-navigation-drawer app color="primary">
      <v-list-item dark>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Study Bro
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

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
      <v-container fluid>
        <Questions />
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
    ...mapGetters('session', ['selectedSession'])
  },
  data () {
    return {
    }
  }
}
</script>
