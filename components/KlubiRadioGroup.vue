<script lang="ts" setup>
import { computed } from "vue";
import { nanoid } from "nanoid";

export type RadioButtonOption = {
  value: string;
  text: string;
};

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array as () => Array<RadioButtonOption>,
  },
  error: {
    type: Object,
    default: {
      $error: false,
    },
  },
});

const emit = defineEmits(["update:modelValue"]);
const hasValidationError = computed(() => props.error && props.error.$error);

const errorClassForInput = computed(() =>
  hasValidationError.value ? "border-red-600" : ""
);

const errorClassForLabel = computed(() =>
  hasValidationError.value ? "text-red-600" : ""
);

const value = computed({
  get: () => props.modelValue,
  set: (value: string) => emit("update:modelValue", value),
});

const componentId = `input-radio-${nanoid()}`;
</script>

<template>
  <div>
    <label :class="[errorClassForLabel]" class="block mb-2 text-sm font-bold">
      {{ label }}
    </label>

    <label
      v-for="(option, index) in options"
      :key="index"
      class="inline-flex items-center mr-2"
    >
      <input
        v-model="value"
        :value="option.value"
        :class="[errorClassForInput]"
        type="radio"
      />
      <span class="ml-2 text-sm">{{ option.text }}</span>
    </label>

    <div v-if="hasValidationError" class="text-xs text-red-600">
      <template v-for="(err, index) in error.$errors">
        <span v-if="err.$validator === 'required'" :key="index">
          <!-- {{ $t("form.text.validation.required.error") }} -->
          TODO
        </span>

        <span v-if="err.$validator === 'requiredIf'" :key="index">
          <!-- {{ $t("form.text.validation.required.error") }} -->
          TODO
        </span>
      </template>
    </div>
  </div>
</template>
