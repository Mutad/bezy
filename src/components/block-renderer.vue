<script>
// eslint-disable-next-line import/no-relative-parent-imports
import Debug from '../router/layouts/debug.vue'
import ComponentRenderer from './component-renderer.vue'
import ElementRenderer from './element-renderer.vue'
export default {
  name: 'BlockRenderer',
  // eslint-disable-next-line vue/no-unused-components
  components: { ComponentRenderer, Debug, ElementRenderer },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    block: Object,
  },
}
</script>

<template>
  <div class="block">
    <Debug>
      <pre>
Block: {{ block.name }}
Children number: {{ block.children.length }}
      </pre>
    </Debug>
    <template v-for="child in block.children">
      <ElementRenderer
        v-if="child.child_type === 'elements'"
        :key="child.id"
        :element="child.child"
      />
      <!-- <p v-else :key="child.id">block</p> -->
      <BlockRenderer v-else :key="child.id" :block="child.child" />
    </template>

    <ComponentRenderer
      v-for="blocksComponent in block.blocks_components"
      :key="blocksComponent.id"
      :blocks-component="blocksComponent"
    />
  </div>
</template>

<style>
.block {
  margin: 5px;
  border: solid 1px green;
}
</style>
