<script lang="ts">
import { validationMixin } from 'vuelidate'
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { email, required, requiredIf } from 'vuelidate/lib/validators'
import PersonalDetails from '~/components/partials/members/create/PersonalDetails.vue'
import Contacts from '~/components/partials/members/create/Contacts.vue'
import Department from '~/components/partials/members/create/Department.vue'
import PaymentDetails from '~/components/partials/members/create/PaymentDetails.vue'
import Submit from '~/components/forms/KlubiSubmit.vue'

export default Vue.extend({
  components: { PersonalDetails, Contacts, Department, PaymentDetails, Submit },
  mixins: [validationMixin],
  validations: {
    personalDetails: {
      firstName: { required },
      lastName: { required },
      birthday: { required }
    },
    contacts: {
      streetAddress: { required },
      streetNumber: { required },
      postcode: { required },
      city: { required },
      email: { email }
    },
    department: {
      department: { required },
      entryDate: { required },
      memberStatus: { required }
    },
    paymentDetails: {
      paymentMethod: { required },
      accountOwnerFirstName: {
        requiredIf: requiredIf(function(this: any) {
          return this.paymentDetails.paymentMethod === 'debit'
        })
      },
      accountOwnerLastName: {
        requiredIf: requiredIf(function(this: any) {
          return this.paymentDetails.paymentMethod === 'debit'
        })
      },
      iban: {
        requiredIf: requiredIf(function(this: any) {
          return this.paymentDetails.paymentMethod === 'debit'
        })
      }
    }
  },

  data() {
    return {
      saving: false
    }
  },

  computed: {
    ...mapGetters({
      personalDetails: 'members/registration/personalDetails',
      contacts: 'members/registration/contacts',
      department: 'members/registration/department',
      paymentDetails: 'members/registration/paymentDetails'
    })
  },

  mounted() {
    // register shift+f shortcut to fill in demo data
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'F' && e.shiftKey) {
        e.preventDefault()
        this.fillFormWithDemoData()
      }
    })
  },

  methods: {
    createMember() {
      this.$v.$touch()
      this.saving = !this.saving

      if (this.$v.$invalid) {
        console.log('invalid bruder')
        this.saving = !this.saving
        return
      }

      setTimeout(() => {
        console.log('Vallah, läuft bei dir!')
        this.saving = !this.saving
      }, 1000)
    },

    fillFormWithDemoData() {
      this.$store.dispatch('members/registration/demo')
    }
  }
})
</script>

<template>
  <div class="w-3/4 mx-auto text-gray-800 shadow-md bg-white rounded px-8 py-4">
    <personal-details :validator="$v.personalDetails" />

    <hr class="w-11/12 my-12 mx-auto" />

    <contacts :validator="$v.contacts" />

    <hr class="w-11/12 my-12 mx-auto" />

    <department :validator="$v.department" />

    <hr class="w-11/12 my-12 mx-auto" />

    <paymentDetails :validator="$v.paymentDetails" />

    <div class="flex container mt-12 justify-end">
      <div class="w-1/5">
        <submit
          @button-clicked="createMember"
          :label="$t('members.create.submit.label')"
          :isBusy="saving"
        />
      </div>
    </div>
  </div>
</template>
