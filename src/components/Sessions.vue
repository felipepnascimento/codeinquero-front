<template>
  <v-list
    dense
    nav
    dark
  >
    <v-list-item-title class="text-h7">
      Suas Provas
    </v-list-item-title>
    <v-list>
      <v-list-item-group v-model="selectedSessionId">
        <v-list-item
          v-for="session in sessions"
          :key="session.id"
          :value="session.id"
          link
          @click="setSelectedSession(session.id)"
        >
          <v-list-item-icon>
            <v-icon>mdi-history</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ session.name }}</v-list-item-title>
            <v-list-item-subtitle>Hoje</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-list>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Sessions',
  computed: {
    ...mapGetters('session', ['sessions', 'selectedSessionId'])
  },
  mounted () {
    this.getAllSessions()
  },
  methods: {
    ...mapActions('session', ['setSelectedSession', 'getAllSessions'])
  }
}
</script>
