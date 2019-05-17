<template>
  <div class="tab-pane" :id="tabId" :class="{active: this.active}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "FormWizardTabContent",
    props: {
      tabId: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        active: false
      }
    },
    inject: ['addTab', 'removeTab'],
    mounted () {
      this.addTab(this)
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.removeTab(this)
    }
  }
</script>

<style scoped>

</style>
