<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <v-card-text>
        <validation-provider
          v-slot="{ errors }"
          name="subject"
          rules="required"
        >
          <v-text-field
            v-model="subject"
            :error-messages="errors"
            label="Digite o tema que deseja"
            required
          >
          </v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="degree"
          rules="required"
        >
          <v-select
            v-model="degree"
            :items="degrees"
            :error-messages="errors"
            label="Selecionae o grau"
            solo
            required
          >
          </v-select>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="level"
          rules="required"
        >
          <v-select
            v-model="level"
            :items="levels"
            :error-messages="errors"
            label="Selecionae o nível"
            solo
          >
          </v-select>
        </validation-provider>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :disabled="invalid"
          type="submit"
        >
          Gerar Prova
        </v-btn>
      </v-card-actions>
    </form>
  </validation-observer>
</template>

<script>
import sessionApi from '@/api/session'

export default {
  name: 'NewAssessmentModal',
  props: {
    closeModal: Function
  },
  components: {
  },
  methods: {
    async submit () {
      await sessionApi.post(this.sessionParams())
      this.clearParams()
      this.closeModal()
    },
    sessionParams () {
      return {
        username: 'Breno',
        email: 'breno.pereira@quero.com',
        degree: this.degree,
        goal: 'entrar na faculdade',
        assessment: {
          subject: this.subject,
          level: this.level
        }
      }
    },
    clearParams () {
      this.subject = ''
      this.degree = ''
      this.level = ''
    }
  },
  data () {
    return {
      subject: '',
      degree: '',
      level: '',
      dialog: false,
      degrees: [
        'Graduação',
        'Pós Graduação',
        'Ensino Médio'
      ],
      levels: [
        'Iniciante',
        'Intermediário',
        'Avançado'
      ]
    }
  }
}
</script>
