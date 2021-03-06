<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'
import KSelect from '~/components/forms/KlubiSelect.vue'
import KRadioGroup from '~/components/forms/KlubiRadioGroup.vue'
import { DepartmentValidation } from '~/components/partials/members/create/validationTypes'

@Component({
  components: { KInput, KSelect, KRadioGroup },
})
export default class Department extends Vue {
  // @Prop() readonly validator!: DepartmentValidation

  private availableDepartments = [
    { value: '', text: 'Abteilung wählen', disabled: true },
    { value: 'football', text: 'Fußball' },
    { value: 'gymnastics', text: 'Gymnastik' },
    { value: 'running', text: 'Laufen' },
    { value: 'taekwondo', text: 'Taekwondo' },
  ]

  private memberStatusOptions = [
    { value: 'active', text: 'Aktiv' },
    { value: 'passive', text: 'Passiv' },
  ]
}
</script>

<template>
  <div class="container flex">
    <div class="w-2/5 mr-5">
      <h3 class="text-lg font-semibold">Abteilung</h3>
      <span class="text-sm text-gray-600">Abteilung zuweisen (optional)</span>
    </div>

    <div class="container w-3/5">
      <k-select v-model="department" :options="availableDepartments" label="Abteilung" />

      <k-input v-model="entryDate" type="date" label="Eintrittsdatum" wrapper-class="mt-4" />

      <k-radio-group v-model="status" label="Mitgliedstatus" wrapper-class="mt-4" />
    </div>
  </div>
</template>
