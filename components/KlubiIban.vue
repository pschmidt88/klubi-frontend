<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
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
  return props.error && props.error.$error;
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
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="icon icon-tabler icon-tabler-cash"
          width="20"
          height="20"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>

      <input
        v-model="value"
        type="text"
        v-maska="'AA## #### #### #### #### ##'"
        :placeholder="placeholder"
        :class="[
          readonly
            ? 'cursor-default bg-gray-100 focus:border-gray-300'
            : 'focus:border-indigo-600',
          errorClassForInput,
        ]"
        class="items-center w-full py-3 pl-16 text-sm border border-gray-300 rounded shadow-sm focus:outline-none"
        @blur="$emit('blur', $event.target)"
      />
    </div>

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(err, index) in error.$errors">
        <span v-if="err.$validator === 'required'" :key="index">
          <!-- {{ $t('form.text.validation.required.error') }} -->
          TODO
        </span>

        <span v-if="err.$validator === 'requiredIf'" :key="index">
          <!-- {{ $t('form.text.validation.required.error') }} -->
          TODO
        </span>

        <span v-if="err.$validator === 'minLength'" :key="index">
          <!-- {{
            $t('form.text.validation.minLength.error', {
              length: err.$params.min,
            })
          }} -->
          TODO
        </span>

        <span v-if="err.$validator === 'email'" :key="index">
          <!-- {{ $t('form.text.validation.email.error') }} -->
          TODO
        </span>
      </template>
    </div>
  </div>
</template>
