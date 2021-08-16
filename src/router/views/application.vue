<script>
import Layout from '@layouts/main.vue'
import Debug from '@layouts/debug.vue'
import Application from '@/src/state/models/Application'

export default {
  page: {
    title: 'Application',
    meta: [{ name: 'description', content: 'The Application page.' }],
  },
  components: { Layout, Debug },
  computed: {
    application() {
      return Application.query()
        .withAllRecursive()
        .find(this.$route.params.id)
    },
  },
}
</script>

<template>
  <Layout>
    <Debug>
      <pre>
      application id: {{ $route.params.id }}
      loaded id: {{ application.id }}
      </pre>
    </Debug>
    <h4>Application: {{ application.name }}</h4>
    pages:
    <ul>
      <li v-for="page in application.pages" :key="page.id">
        <router-link :to="{ name: 'pages-single', props: { id: page.id } }">
          {{ page.name }}
        </router-link>
      </li>
    </ul>
    APIs:
    <ul>
      <li v-for="consumer in application.consumers" :key="consumer.id">
        <router-link
          :to="{ name: 'consumers-single', props: { id: consumer.id } }"
        >
          {{ consumer.name }}
        </router-link>
      </li>
    </ul>
    <Debug>
      <pre>{{ application }}</pre>
    </Debug>
  </Layout>
</template>
