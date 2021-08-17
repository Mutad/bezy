<template>
  <div v-show="false" class="container">
    <div class="wrapper">
      <span>DEBUG ENABLED</span>
      <button class="btn" @click="show = !show">{{
        show ? 'HIDE' : 'SHOW'
      }}</button>
    </div>
    <slot v-if="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss">
@import '@design';

.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
  color: rgb(0, 160, 0);
  background-color: black;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.btn {
  color: inherit;
  background-color: transparent;
  border: 0;
}
</style>
