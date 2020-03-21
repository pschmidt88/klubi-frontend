<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PersonalDetails from '~/components/partials/members/create/PersonalDetails.vue'
import Contacts from '~/components/partials/members/create/Contacts.vue'
import Department from '~/components/partials/members/create/Department.vue'
import PaymentDetails from '~/components/partials/members/create/PaymentDetails.vue'

@Component({
  components: { PersonalDetails, Contacts, Department, PaymentDetails }
})
export default class CreateMemberPage extends Vue {}
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
  </div>
</template>
