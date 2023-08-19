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
        >
        <v-icon left>
          mdi-plus
        </v-icon>
        Nova Prova
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Escolha o tema da sua prova</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Digite o tema que deseja"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click=generateAssessment
        >
          Gerar Prova
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'NewAssessmentModal',
  components: {
  },
  methods: {
    generateAssessment () {
      this.closeModal()
    },
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
