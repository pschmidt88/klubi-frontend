<script lang="ts" setup>
import { computed, PropType } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
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
    default: '',
  },
  errors: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const hasValidationError = computed(() => {
  return props.errors.length > 0
})

const errorClassForInput = computed(() => {
  return hasValidationError.value ? 'text-red-600' : ''
})

const errorClassForLabel = computed(() => {
  return hasValidationError.value ? 'border-red-600' : ''
})
</script>

<template>
  <div class="flex flex-col">
    <label
      class="flex block pb-2 text-sm font-bold text-gray-800"
      :class="errorClassForLabel"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :class="[
        readonly
          ? 'cursor-default bg-gray-100 focus:border-gray-300'
          : 'focus:border-indigo-600',
        errorClassForInput,
      ]"
      class="py-3 pl-3 text-sm border border-gray-300 rounded shadow-sm focus:outline-none"
      @blur="$emit('blur', $event.target)"
    />

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(message, index) in errors">
        <span>{{ message }}</span>
      </template>
    </div>
  </div>
</template>
