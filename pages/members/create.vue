<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { validationMixin } from 'vuelidate'
import { mapGetters } from 'vuex'
import { email, required, requiredIf } from 'vuelidate/lib/validators'
import PersonalDetails from '~/components/partials/members/create/PersonalDetails.vue'
import Contacts from '~/components/partials/members/create/Contacts.vue'
import Department from '~/components/partials/members/create/Department.vue'
import PaymentDetails from '~/components/partials/members/create/PaymentDetails.vue'

@Component({
  components: { PersonalDetails, Contacts, Department, PaymentDetails },
  mixins: [validationMixin],
  computed: {
    ...mapGetters({
      personalDetails: 'members/registration/personalDetails',
      contacts: 'members/registration/contacts',
      department: 'members/registration/department',
      paymentDetails: 'members/registration/paymentDetails'
    })
  },
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
  }
})
export default class CreateMemberPage extends Vue {
  createMember() {
    this.$v.$touch()
    if (this.$v.$invalid) {
      console.log('invalid bruder')
      return
    }

    console.log('vallah läuft bei dir')
    // this.$store.dispatch('members/registration/createMember')
  }
}
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
      <button
        @click="createMember"
        class="mb-4 border text-white bg-indigo-700 hover:bg-indigo-800 rounded px-2 py-2"
      >
        Mitglied anlegen
      </button>
    </div>
  </div>
</template>
