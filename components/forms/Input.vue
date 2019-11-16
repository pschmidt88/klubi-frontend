<script lang="ts">
import Vue from 'vue'
import { mask } from 'vue-the-mask'
import { Component, Prop, Model } from 'vue-property-decorator'

@Component({
  directives: { mask }
})
export default class KlubiInput extends Vue {
  @Prop(String)
  readonly wrapperClass: string | undefined

  @Prop(String)
  readonly label: string | undefined

  @Prop(Boolean)
  readonly readonly: boolean | undefined

  @Prop({ default: 'text', type: String })
  readonly type!: string

  @Prop(String)
  readonly placeholder: string | undefined

  @Prop({ default: 'text-sm', type: String })
  readonly labelClass: string | undefined

  @Model('changeInput', { type: String })
  value!: string

  inputId: string = ''

  mounted() {
    this.inputId = `input-${this.type}-${this._uid}`
  }
}
</script>

<template>
  <div :class="wrapperClass">
    <label :for="inputId" :class="labelClass" class="block mb-2">
      <slot name="label">
        {{ label }}
      </slot>
      <input
        :id="inputId"
        :value="value"
        @input="$emit('changeInput', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly"
        :class="[
          readonly
            ? 'cursor-default bg-gray-100'
            : 'focus:outline-none focus:shadow-outline'
        ]"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      />
    </label>
  </div>
</template>
