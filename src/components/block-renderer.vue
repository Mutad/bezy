<script>
import ComponentRenderer from './component-renderer.vue'
export default {
  components: { ComponentRenderer },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    block: Object,
  },
}
</script>

<template>
  <div class="block">
    <pre>{{ block.name }}</pre>
    <ComponentRenderer
      v-for="blocksComponent in block.blocks_components"
      :key="blocksComponent.id"
      :blocks-component="blocksComponent"
    />
  </div>
</template>

<style>
.block {
  border: solid 1px black;
}
</style>
