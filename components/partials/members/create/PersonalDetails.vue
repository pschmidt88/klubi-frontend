<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import KInput from '~/components/forms/KlubiInput.vue'
import useMemberRegistration from '~/composables/useMemberRegistration'

export default defineComponent({
  components: { KInput },
  // props: ['validator'],
  setup() {
    const { personalDetails } = useMemberRegistration()

    return { personalDetails }
  },
})
</script>

<template>
  <div class="container flex">
    <div class="w-2/5">
      <h3 class="text-lg font-semibold">Persönliche Daten</h3>
      <span class="text-sm text-gray-600">Allgemeines Zeugs halt, ne?</span>
    </div>

    <div class="w-3/5">
      <k-input v-model="personalDetails.memberId" label="Mitgliedsnummer">
        <template v-slot:label>
          Mitgliedsnummer
          <span
            class="text-xs font-normal text-gray-500"
          >(Leer lassen um automatisch zu generieren)</span>
        </template>
      </k-input>

      <k-input
        v-model="personalDetails.firstName"
        label="Vorname"
        placeholder="Paul"
        wrapper-class="mt-4"
      />

      <k-input
        v-model="personalDetails.lastName"
        label="Nachname"
        placeholder="Schmidt"
        wrapper-class="mt-4"
      />

      <k-input
        v-model="personalDetails.birthday"
        type="date"
        label="Geburtstag"
        placeholder="16.06.1988"
        wrapper-class="mt-4"
      />
    </div>
  </div>
</template>
