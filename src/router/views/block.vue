<script>
import Layout from '@layouts/main.vue'
import Debug from '@layouts/debug.vue'
import Block from '@/src/state/models/Block'
import BlockRenderer from '@components/block-renderer.vue'

export default {
  page: {
    title: 'Block',
    meta: [{ name: 'description', content: 'The Block page.' }],
  },
  components: { Layout, Debug, BlockRenderer },
  computed: {
    block() {
      return Block.query()
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
        route id: {{ $route.params.id }},
        loaded id: {{ block.id }}
      </pre>
    </Debug>
    <div
      v-for="blockComponent in block.blocks_components"
      :key="blockComponent.id"
    >
      <BlockRenderer :block="block" />
    </div>
    <Debug>
      <pre>{{ block }}</pre>
    </Debug>
  </Layout>
</template>
