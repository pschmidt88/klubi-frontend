<template>
  <li :class="{ active: tab.active }">
    <a href="javascript:void(0)">
      <span class="step">{{ this.index + 1 }}</span>
      <span class="title">{{ this.tab.title }}</span>
    </a>
  </li>
</template>

<script>
  export default {
    name: "FormWizardStep",
    props: {
      tab: {
        type: Object,
        default: () => {}
      },
      index: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>

</style>
