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
          :loading="loading"
        >
          Gerar Prova
        </v-btn>
      </v-card-actions>
    </form>
  </validation-observer>
</template>

<script>
import sessionApi from '@/api/session'
import { mapActions } from 'vuex'

export default {
  name: 'NewAssessmentModal',
  props: {
    closeModal: Function
  },
  methods: {
    ...mapActions('session', ['setSelectedSession', 'getAllSessions', 'setFinishedSession']),
    setLoading (loading) {
      this.loading = loading
    },
    async submit () {
      this.setLoading(true)
      const { status, data } = await sessionApi.post(this.sessionParams())
      if (status === 200) {
        this.clearParams()
        this.closeModal()
        await this.getAllSessions()
        this.setSelectedSession(data.sessionId)
        this.setFinishedSession(false)
      }
      this.setLoading(false)
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
      loading: false,
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
