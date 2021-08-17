<script>
import Layout from '@layouts/main.vue'
import Debug from '@layouts/debug.vue'
import Page from '@/src/state/models/Page'
import BlockRenderer from '@components/block-renderer.vue'
import draggable from 'vuedraggable'

export default {
  page: {
    title: 'Page',
    meta: [{ name: 'description', content: 'The Page page.' }],
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { Layout, Debug, BlockRenderer, draggable },
  computed: {
    page() {
      return Page.query()
        .withAllRecursive(10)
        .find(this.$route.params.id)
    },
  },
}
</script>

<template>
  <Layout>
    <Debug>
      <pre>
        route id: {{ $route.params.id }}
        loaded id: {{ page.id }}
      </pre>
    </Debug>
    <h3>{{ page.name }}</h3>
    <!-- <pre>{{ page }}</pre> -->
    <BlockRenderer
      v-for="blockPage in page.blocks_pages"
      :key="blockPage.id"
      :block="blockPage.block"
    />
    <!-- <draggable>
    </draggable> -->
  </Layout>
</template>
