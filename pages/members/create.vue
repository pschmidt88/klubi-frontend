<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PersonalDetails from '~/components/partials/members/create/PersonalDetails.vue'
import Contacts from '~/components/partials/members/create/Contacts.vue'
import Department from '~/components/partials/members/create/Department.vue'
import PaymentDetails from '~/components/partials/members/create/PaymentDetails.vue'

@Component({
  components: { PersonalDetails, Contacts, Department, PaymentDetails }
})
export default class CreateMemberPage extends Vue {
  createMember() {
    this.$store.dispatch('members/registration/createMember')
  }
}
</script>

<template>
  <div
    class="w-3/4 mx-auto text-gray-800 shadow-md bg-white rounded px-5 py-4 "
  >
    <personal-details />

    <hr class="w-11/12 my-12 mx-auto" />

    <contacts />

    <hr class="w-11/12 my-12 mx-auto" />

    <department />

    <hr class="w-11/12 my-12 mx-auto" />

    <paymentDetails />

    <div class="flex mt-12 justify-end">
      <button
        @click="createMember"
        class="mb-4 border text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 border-indigo-700 rounded px-2 py-2"
      >
        Mitglied anlegen
      </button>
    </div>
  </div>
</template>
