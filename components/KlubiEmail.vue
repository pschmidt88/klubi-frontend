<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: null,
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

const emit = defineEmits(["update:modelValue", "blur"]);

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
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <div class="relative">
      <div
        class="absolute flex items-center h-full px-4 text-gray-600 border-r"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-mail"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </div>

      <input
        v-model="value"
        type="email"
        @blur="$emit('blur', $event.target)"
        :placeholder="placeholder"
        :readonly="readonly"
        :class="[
          readonly
            ? 'cursor-default bg-gray-100 focus:border-gray-300'
            : 'focus:border-indigo-600',
          errorClassForInput,
        ]"
        class="items-center w-full py-3 pl-16 text-sm border border-gray-300 rounded shadow-sm focus:outline-none"
      />
    </div>

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(error, index) in validation.$errors">
        <span v-if="error.$validator === 'required'" :key="index">
          TODO
          <!-- {{ $t("form.text.validation.required.error") }} -->
        </span>

        <span v-if="error.$validator === 'requiredIf'" :key="index">
        TODO
          <!-- {{ $t("form.text.validation.required.error") }} -->
        </span>

        <span v-if="error.$validator === 'minLength'" :key="index">
        TODO
          <!-- {{
            $t("form.text.validation.minLength.error", {
              length: error.$params.min,
            })
          }} -->
        </span>

        <span v-if="error.$validator === 'email'" :key="index">
        TODO
          <!-- {{ $t("form.text.validation.email.error") }} -->
        </span>
      </template>
    </div>
  </div>
</template>
