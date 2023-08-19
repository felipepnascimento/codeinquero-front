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

      <Assessments />
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-toolbar-title >
        Prova de Matemática Aplicada
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
import Assessments from '@/components/Assessments'
import NewAssessmentModal from '@/components/NewAssessmentModal'
import Questions from '@/components/Questions/Questions'

export default {
  name: 'AppHome',
  components: {
    Assessments,
    NewAssessmentModal,
    Questions
  },
  data () {
    return {
    }
  }
}
</script>
