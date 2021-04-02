<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { Member } from '~/types/member'
import { rawUsers } from '~/utility/fake_members.js'
import MemberTable from '~/components/members/datatable/MemberTable.vue'

export default defineComponent({
  components: { MemberTable },
  setup() {
    const users: Array<Member> = reactive(rawUsers)

    return {
      users,
    }
  },
})
</script>

<template>
  <div>
    <div class="container mx-auto bg-white rounded shadow">
      <div
        class="flex flex-col items-start justify-end w-full p-4 md:flex-row lg:p-8 md:items-stretch"
      >
        <div class="flex items-center md:ml-6">
          <nuxt-link
            class="flex items-center h-8 px-5 text-sm text-indigo-700 transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300"
            to="/members/create"
          >
            Neues Mitglied
          </nuxt-link>
        </div>
      </div>

      <div class="w-full overflow-x-scroll sm:overflow-x-hidden">
        <MemberTable :members="users" />
      </div>
    </div>
  </div>
</template>
