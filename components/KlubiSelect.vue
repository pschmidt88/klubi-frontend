<script lang="ts" setup>
import { computed } from "vue";

export interface SelectOption {
  value: string;
  text: string;
  disabled: boolean | undefined;
};

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array as () => Array<SelectOption>,
  },
  modelValue: {
    type: String,
    default: "",
  },
  validation: {
    type: Object,
    default: {
      $error: false,
    },
  },
});

const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (value: string) => emit("update:modelValue", value),
});

const hasValidationError = computed(() => {
  return props.validation && props.validation.$error;
});

const errorClassForInput = computed(() => {
  return hasValidationError.value ? "border-red-600" : "";
});

const errorClassForLabel = computed(() => {
  return hasValidationError.value ? "text-red-600" : "";
});
</script>

<template>
  <div class="flex flex-col">
    <label
      :class="[errorClassForLabel]"
      class="pb-2 text-sm font-bold text-gray-800"
    >
      {{ label }}
    </label>

    <div class="relative flex border border-gray-300 rounded shadow-sm">
      <select
        v-model="value"
        :class="[errorClassForInput]"
        class="z-10 w-full py-3 pl-3 text-sm text-gray-800 bg-transparent border border-transparent rounded appearance-none focus:outline-none focus:border-indigo-700"
      >
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </option>
      </select>
      <div
        class="absolute top-0 bottom-0 right-0 z-0 flex flex-col items-center justify-center px-4 mx-auto text-gray-500 border-l border-gray-300"
      >
        <svg
          tabindex="0"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-up"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="6 15 12 9 18 15" />
        </svg>
        <svg
          tabindex="0"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(error, index) in validation.$errors">
        <span v-if="error.$validator === 'required'" :key="index">
        TODO
          <!-- {{ $t("form.text.validation.required.error") }} -->
        </span>

        <span v-if="error.$validator === 'requiredIf'" :key="index">
          <!-- {{ $t("form.text.validation.required.error") }} -->
          TODO
        </span>
      </template>
    </div>
  </div>
</template>
