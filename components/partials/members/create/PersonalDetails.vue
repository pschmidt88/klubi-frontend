<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'

@Component({
  components: { KInput }
})
export default class PersonalDetails extends Vue {}
</script>

<template>
  <div class="flex container">
    <div class="w-2/5 mr-5">
      <h3 class="font-semibold text-lg">Persönliche Daten</h3>
      <span class="text-sm text-gray-600">
        Allgemeines Zeugs halt, ne?
      </span>
    </div>

    <div class="container w-3/5">
      <k-input label="Mitgliedsnummer">
        <template v-slot:label>
          Mitgliedsnummer
          <span class="text-xs font-normal text-gray-500">
            (Leer lassen um automatisch zu generieren)
          </span>
        </template>
      </k-input>

      <k-input
        v-model="firstName"
        label="Vorname"
        placeholder="Paul"
        wrapper-class="mt-4"
      />

      <k-input
        v-model="lastName"
        label="Nachname"
        placeholder="Schmidt"
        wrapper-class="mt-4"
      />

      <k-input
        v-model="dateOfBirth"
        label="Geburtstag"
        placeholder="16.06.1988"
        wrapper-class="mt-4"
      />
    </div>
  </div>
</template>
