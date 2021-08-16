<script>
import Layout from '@layouts/main.vue'
import Application from '@/src/state/models/Application'

export default {
  page: {
    title: 'Applications',
    meta: [{ name: 'description', content: 'The Applications page.' }],
  },
  components: { Layout },
  computed: {
    apps() {
      return Application.all()
    },
  },
}
</script>

<template>
  <Layout>
    <ul>
      <li v-for="app in apps" :key="app.id">
        <router-link
          :to="{ name: 'applications-single', params: { id: app.id } }"
        >
          {{ app.name }}
        </router-link>
      </li>
    </ul>
  </Layout>
</template>
