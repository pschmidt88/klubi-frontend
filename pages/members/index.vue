<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { Member } from '~/types/member'
import { rawUsers } from '~/utility/fake_members.js'
import MemberList from '~/components/members/datatable/MemberList.vue'

export default defineComponent({
  components: { MemberList },
  setup() {
    const users: Array<Member> = reactive(rawUsers)

    return {
      users,
    }
  },
})
</script>

<template>
  <div class="container mx-auto bg-white rounded shadow">
    <MemberList :members="users" />
  </div>
</template>
