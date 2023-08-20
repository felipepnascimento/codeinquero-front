<template>
  <v-dialog
    v-model="dialog"
    width="600px"
    light
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        outlined
        v-bind="attrs"
        v-on="on"
        dark
        >
        <v-icon left>
          mdi-plus
        </v-icon>
        Nova Prova
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Preencha as informações para começar a prova</span>
      </v-card-title>
      <Form :close-modal="closeModal" />
    </v-card>
  </v-dialog>
</template>

<script>
import Form from './Form.vue'

export default {
  name: 'NewAssessmentModal',
  components: {
    Form
  },
  methods: {
    closeModal () {
      this.dialog = false
    }
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
