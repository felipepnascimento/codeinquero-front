<template>
  <v-app>
    <v-navigation-drawer app color="primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Study Bro
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <Assessments />
    </v-navigation-drawer>

    <v-app-bar app color="primary ">
      <v-spacer></v-spacer>

      <NewAssessmentModal />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- -->
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Assessments from '@/components/AppHome/Assessments'
import NewAssessmentModal from '@/components/AppHome/NewAssessmentModal'

export default {
  name: 'AppHome',
  components: {
    Assessments,
    NewAssessmentModal
  },
  data () {
    return {
    }
  }
}
</script>
