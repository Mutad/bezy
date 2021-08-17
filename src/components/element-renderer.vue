<script>
// eslint-disable-next-line import/no-relative-parent-imports
import Element from '../state/models/Element'
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    element: Object,
  },
  computed: {
    el() {
      return Element.query()
        .withAllRecursive()
        .find(this.element.id)
    },
  },
}
</script>

<template>
  <component :is="element.type">
    <template v-if="element.children[0]">{{
      element.children[0].child.name
    }}</template>
  </component>
</template>

<style lang="scss" module>
@import '@design';
</style>
