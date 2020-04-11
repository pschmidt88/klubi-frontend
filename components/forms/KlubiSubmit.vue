<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class KlubiSubmit extends Vue {
  @Prop({ default: 'Speichern' }) readonly label!: string
  @Prop(Boolean) isBusy: boolean | undefined

  get background() {
    return this.isBusy ? 'bg-indigo-500' : 'bg-indigo-700 hover:bg-indigo-800'
  }

  get pointer() {
    return this.isBusy ? 'cursor-default' : 'cursor-pointer'
  }
}
</script>

<template>
  <div
    @click="$emit('button-clicked')"
    :disabled="isBusy"
    :class="[background, pointer]"
    class="mb-4 border text-white rounded px-2 py-2 w-full"
  >
    <div class="flex justify-center">
      <div
        v-if="isBusy"
        class="loader ease-linear rounded-full border-2 border-t-2 border-white h-6 w-6 mr-2"
      ></div>
      <span v-else>{{ label }}</span>
    </div>
  </div>
</template>

<style>
.loader {
  border-top-color: #667eea;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
