<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import useMemberRegistration from '~/composables/useMemberRegistration.ts'
import KInput from '~/components/forms/KlubiInput.vue'
import KSelect from '~/components/forms/KlubiSelect.vue'
import KRadioGroup from '~/components/forms/KlubiRadioGroup.vue'
import KIban from '~/components/forms/KlubiIban.vue'
import KUpload from '~/components/forms/KlubiUpload.vue'
import SectionHeader from '~/components/partials/members/create/SectionHeader.vue'
import KEmail from '~/components/forms/KEmail.vue'

export default defineComponent({
  components: {
    KInput,
    KSelect,
    KRadioGroup,
    KIban,
    KUpload,
    SectionHeader,
    KEmail,
  },
  setup() {
    const {
      loading,
      demoMember,
      availableDepartments,
      memberStatusOptions,
      availablePaymentMethods,
      validation,
      personalDetails,
      paymentDetails,
      contacts,
      department,
      createMember,
    } = useMemberRegistration()

    function onSubmit() {
      validation.value.$touch()
      console.log(department.value.memberStatus)
      console.log('Creating member...')
      // createMember()
    }

    onMounted(() => {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'F' && e.shiftKey) {
          e.preventDefault()
          demoMember()
        }
      })
    })

    return {
      loading,
      onSubmit,
      availableDepartments,
      memberStatusOptions,
      availablePaymentMethods,
      department,
      personalDetails,
      paymentDetails,
      contacts,
      validation,
    }
  },
  computed: {
    isDirectDebit(): boolean {
      return this.paymentDetails.paymentMethod === 'debit'
    },
  },
})
</script>

<template>
  <div>
    <form
      novalidate
      class="container mx-auto text-gray-800 bg-white rounded shadow"
      @submit.prevent="onSubmit"
    >
      <SectionHeader title="Persönliche Daten" />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <KInput
              v-model="personalDetails.memberId"
              label="Mitgliedsnummer"
              placeholder="Leer lassen um automatisch zu generieren"
              class="mb-4"
            />

            <KInput
              v-model="personalDetails.firstName"
              label="Vorname"
              placeholder="Paul"
              class="mb-4"
              :validation="validation.personalDetails.firstName"
            />

            <KInput
              v-model="personalDetails.lastName"
              label="Nachname"
              placeholder="Schmidt"
              class="mb-4"
              :validation="validation.personalDetails.lastName"
            />

            <KInput
              v-model="personalDetails.birthday"
              type="date"
              label="Geburtstag"
              placeholder="06/16/1988"
              :validation="validation.personalDetails.birthday"
            />
          </div>
        </div>
      </div>

      <SectionHeader
        title="Kontakt"
        description="Adresse, Kontaktmöglichkeiten, etc."
      />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <div class="flex mb-4 xl:w-full">
              <KInput
                v-model="contacts.streetAddress"
                label="Straße"
                placeholder="Herlebergweg"
                class="w-4/5"
                label-class="text-xs"
                :validation="validation.contacts.streetAddress"
              />
              <KInput
                v-model="contacts.streetNumber"
                label="Hausnr."
                placeholder="20"
                class="w-1/5 ml-2"
                label-class="text-xs"
                :validation="validation.contacts.streetNumber"
              />
            </div>

            <div class="flex mb-4">
              <KInput
                v-model="contacts.postcode"
                label="Postleitzahl"
                placeholder="34130"
                class="w-2/5"
                label-class="text-xs"
                :validation="validation.contacts.postcode"
              />
              <KInput
                v-model="contacts.city"
                label="Ort"
                placeholder="Kassel"
                class="w-3/5 ml-2"
                label-class="text-xs"
                :validation="validation.contacts.city"
              />
            </div>
            <KInput
              v-model="contacts.phone"
              placeholder="0123 456789"
              class="mb-4"
              label="Telefon"
              :validation="validation.contacts.phone"
            />
            <KEmail
              v-model="contacts.email"
              label="E-Mail"
              placeholder="email@example.com"
              :validation="validation.contacts.email"
            />
          </div>
        </div>
      </div>

      <SectionHeader
        title="Abteilung"
        description="Abteilung zuweisen (optional)"
      />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <KSelect
              v-model="department.department"
              :options="availableDepartments"
              label="Abteilung"
              class="mb-4"
              :validation="validation.department.department"
            />

            <KInput
              v-model="department.entryDate"
              type="date"
              label="Eintrittsdatum"
              class="mb-4"
              :validation="validation.department.entryDate"
            />

            <KRadioGroup
              v-model="department.memberStatus"
              label="Mitgliedstatus"
              :options="memberStatusOptions"
              :validation="validation.department.status"
            />
          </div>
        </div>
      </div>

      <SectionHeader
        title="Mitgliedsbeitrag"
        description="Mitgliedsbeitrag und Zahlungsdaten"
      />

      <div class="w-11/12 mx-auto">
        <div class="container mx-auto">
          <div class="mx-auto my-8 xl:w-full xl:mx-0">
            <KSelect
              v-model="paymentDetails.paymentMethod"
              :options="availablePaymentMethods"
              label="Zahlungsmethode"
              class="mb-4"
              :validation="validation.paymentDetails.paymentMethod"
            />

            <div v-if="isDirectDebit">
              <KInput
                v-model="paymentDetails.accountOwnerFirstName"
                label="Vorname"
                placeholder="Paul"
                class="mb-4"
                :validation="validation.paymentDetails.accountOwnerFirstName"
              />

              <KInput
                v-model="paymentDetails.accountOwnerLastName"
                label="Nachname"
                placeholder="Schmidt"
                class="mb-4"
                :validation="validation.paymentDetails.accountOwnerLastName"
              />

              <KIban
                v-model="paymentDetails.iban"
                class="mb-4"
                label="IBAN"
                placeholder="DE74 5001 0517 4238 1497 32"
                :validation="validation.paymentDetails.iban"
              />

              <KInput
                v-model="paymentDetails.bic"
                class="mb-4"
                label="BIC"
                :validation="validation.paymentDetails.bic"
              />

              <KInput
                v-model="paymentDetails.bankName"
                class="mb-4"
                label="Bankinstitut"
                readonly
              />

              <KUpload label="SEPA Lastschriftmandat" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-end w-full px-4 py-4 mt-6 bg-gray-100 rounded-bl rounded-br sm:px-12"
      >
        <button
          class="px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none"
          type="submit"
        >
          {{ $t('members.create.submit.label') }}
        </button>
      </div>
    </form>
  </div>
</template>
