<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    blocksComponent: Object,
  },
  methods: {
    getComponentData() {
      const data = {}
      if (this.blocksComponent.attrs !== '')
        data.attrs = JSON.parse(this.blocksComponent.attrs)
      return data
    },
  },
  render() {
    return this.$createElement(
      this.blocksComponent.component.type,
      this.getComponentData(),
      [this.blocksComponent.content]
    )
  },
}
</script>
