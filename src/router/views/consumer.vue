<script>
import Layout from '@layouts/main.vue'
import ApiConsumer from '@/src/state/models/ApiConsumer'
import Debug from '@layouts/debug.vue'
import Axios from 'axios'

export default {
  page: {
    title: 'Consumer',
    meta: [{ name: 'description', content: 'The Consumer page.' }],
  },
  components: { Layout, Debug },
  data() {
    return {
      resp: {
        id: 0,
        data: null,
        status: 0,
        statusText: 'Send request to get info',
        headers: null,
      },
    }
  },
  computed: {
    consumer() {
      return ApiConsumer.query()
        .withAllRecursive()
        .find(this.$route.params.id)
    },
  },
  methods: {
    test(endpoint) {
      Axios.get(new URL(endpoint.path, this.consumer.url)).then((resp) => {
        this.resp.id = endpoint.id
        this.resp.data = resp.data
        this.resp.status = resp.status
        this.resp.statusText = resp.statusText
        this.resp.headers = resp.headers
      })
    },
  },
}
</script>

<template>
  <Layout>
    <Debug>
      <pre>
        route id: {{ $route.params.id }}
        loaded id: {{ consumer.id }}
      </pre>
    </Debug>
    <h3>{{ consumer.name }}</h3>
    <dl>
      <dt>Language</dt>
      <dd>{{ consumer.lang }}</dd>
      <dt>URL</dt>
      <dd>{{ consumer.url }}</dd>
    </dl>
    <ul>
      <li v-for="endpoint in consumer.endpoints" :key="endpoint.id">
        <div>
          {{ endpoint.path }}
          <button @click="test(endpoint)">test</button>
          <pre v-if="resp.id === endpoint.id">
response code: {{ resp.status }} {{ resp.statusText }}
headers: {{ resp.headers }}
          </pre>
        </div>
      </li>
    </ul>
  </Layout>
</template>
