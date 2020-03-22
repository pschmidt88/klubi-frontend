<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import KInput from '~/components/forms/KlubiInput.vue'
import { PersonalDetailsValidation } from '~/components/partials/members/create/validationTypes'

@Component({
  components: { KInput }
})
export default class PersonalDetails extends Vue {
  @Prop() readonly validator!: PersonalDetailsValidation

  get memberId(): string {
    return this.$store.state.members.registration.member_id
  }

  set memberId(value: string) {
    this.$store.commit('members/registration/updateMemberId', {
      memberId: value
    })
    this.validator.memberId.$touch()
  }

  get firstName(): string {
    return this.$store.state.members.registration.first_name
  }

  set firstName(value: string) {
    this.$store.commit('members/registration/updateFirstName', {
      first_name: value
    })
    this.validator.firstName.$touch()
  }

  get lastName(): string {
    return this.$store.state.members.registration.last_name
  }

  set lastName(value: string) {
    this.$store.commit({
      type: 'members/registration/updateLastName',
      last_name: value
    })
    this.validator.lastName.$touch()
  }

  get dateOfBirth(): string {
    return this.$store.state.members.registration.birthday
  }

  set dateOfBirth(value: string) {
    this.$store.commit({
      type: 'members/registration/updateBirthday',
      birthday: value
    })
    this.validator.birthday.$touch()
  }
}
</script>

<template>
  <div class="flex container">
    <div class="w-2/5">
      <h3 class="font-semibold text-lg">Persönliche Daten</h3>
      <span class="text-sm text-gray-600">
        Allgemeines Zeugs halt, ne?
      </span>
    </div>

    <div class="w-3/5">
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
        :validation="validator.firstName"
        label="Vorname"
        placeholder="Paul"
        wrapper-class="mt-4"
      />

      <k-input
        v-model="lastName"
        :validation="validator.lastName"
        label="Nachname"
        placeholder="Schmidt"
        wrapper-class="mt-4"
      />

      <k-input
        v-model="dateOfBirth"
        :validation="validator.birthday"
        type="date"
        label="Geburtstag"
        placeholder="16.06.1988"
        wrapper-class="mt-4"
      />
    </div>
  </div>
</template>
