<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'
import KSelect from '~/components/forms/KlubiSelect.vue'
import KRadioGroup from '~/components/forms/KlubiRadioGroup.vue'

@Component({
  components: { KInput, KSelect, KRadioGroup }
})
export default class Department extends Vue {
  private availableDepartments = [
    { value: '', text: 'Abteilung wählen', disabled: true },
    { value: 'football', text: 'Fußball' },
    { value: 'gymnastics', text: 'Gymnastik' },
    { value: 'running', text: 'Laufen' },
    { value: 'taekwondo', text: 'Taekwondo' }
  ]

  private memberStatusOptions = [
    { value: 'active', text: 'Aktiv' },
    { value: 'passive', text: 'Passiv' }
  ]

  get department(): string {
    return this.$store.state.members.registration.department
  }

  set department(value: string) {
    this.$store.commit('members/registration/updateDepartment', {
      department: value
    })
  }

  get status(): string {
    return this.$store.state.members.registration.member_status
  }

  set status(value: string) {
    this.$store.commit('members/registration/updateMemberStatus', {
      status: value
    })
  }

  get entryDate(): string {
    return this.$store.state.members.registration.entry_date
  }

  set entryDate(value: string) {
    this.$store.commit('members/registration/updateEntryDate', {
      entryDate: value
    })
  }
}
</script>

<template>
  <div class="flex container">
    <div class="w-2/5 mr-5">
      <h3 class="font-semibold text-lg">Abteilung</h3>
      <span class="text-sm text-gray-600">
        Abteilung zuweisen (optional)
      </span>
    </div>

    <div class="container w-3/5">
      <k-select
        v-model="department"
        :options="availableDepartments"
        label="Abteilung"
      />

      <k-input
        v-model="entryDate"
        type="date"
        label="Eintrittsdatum"
        wrapper-class="mt-4"
      />

      <k-radio-group
        v-model="status"
        :options="memberStatusOptions"
        label="Mitgliedstatus"
        wrapper-class="mt-4"
      />
    </div>
  </div>
</template>
