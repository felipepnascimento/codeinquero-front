<template>
  <v-list
    dense
    nav
    dark
  >
    <v-list-item-title class="text-h7">
      Suas Provas
    </v-list-item-title>
    <v-list-item
      v-for="assessment in assessments"
      :key="assessment.title"
      link
    >
      <v-list-item-icon>
        <v-icon>mdi-history</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ assessment.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ assessment.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: 'Assessments',
  data () {
    return {
      assessments: [
        {
          title: 'Matemática Aplicada',
          subtitle: 'Hoje'
        },
        {
          title: 'História',
          subtitle: 'Ontem'
        },
        {
          title: 'Fisiologia do sistema',
          subtitle: '10 de Agosto'
        }
      ]
    }
  }
}
</script>
