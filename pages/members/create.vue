<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import useMemberRegistration from '~/composables/useMemberRegistration.ts'
import PersonalDetails from '~/components/partials/members/create/PersonalDetails.vue'
import Contacts from '~/components/partials/members/create/Contacts.vue'
import Department from '~/components/partials/members/create/Department.vue'
import PaymentDetails from '~/components/partials/members/create/PaymentDetails.vue'
import Submit from '~/components/forms/KlubiSubmit.vue'

export default defineComponent({
  components: { PersonalDetails, Contacts, Department, PaymentDetails, Submit },
  setup(_props) {
    const { loading, demoMember } = useMemberRegistration()

    function onSubmit() {
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

    return { loading, onSubmit }
  },
})
</script>

<template>
  <div class="w-3/4 px-8 py-4 ml-auto text-gray-800 bg-white rounded shadow-md">
    <personal-details />

    <hr class="w-11/12 mx-auto my-12" />

    <contacts />

    <hr class="w-11/12 mx-auto my-12" />

    <department />

    <hr class="w-11/12 mx-auto my-12" />

    <paymentDetails />

    <div class="container flex justify-end mt-12">
      <div class="w-1/5">
        <submit
          :label="$t('members.create.submit.label')"
          :is-busy="loading"
          @button-clicked="onSubmit"
        />
      </div>
    </div>
  </div>
</template>
