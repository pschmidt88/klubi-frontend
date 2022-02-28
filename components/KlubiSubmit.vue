<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: "Speichern",
  },
  isBusy: {
    type: Boolean,
    default: false,
  },
});

const background = computed(() => {
  return props.isBusy ? "bg-indigo-500" : "bg-indigo-700 hover:bg-indigo-800";
});

const pointer = computed(() => {
  return props.isBusy ? "cursor-default" : "cursor-pointer";
});
</script>

<template>
  <button
    class="flex justify-center w-48 px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none"
    :disabled="isBusy"
    type="submit"
  >
    <div
      v-if="isBusy"
      class="w-6 h-6 ease-linear border-2 border-t-2 border-white rounded-full loader"
    ></div>
    <span v-else>{{ label }}</span>
  </button>
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
