<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Member } from '~/types/member'
import MemberRow from '~/components/members/datatable/MemberRow.vue'

export default defineComponent({
  components: { MemberRow },
  props: {
    members: {
      type: Array as PropType<Array<Member>>,
      default: () => [],
    },
  },
  setup() {},
})
</script>

<template>
  <table class="min-w-full bg-white">
    <thead>
      <tr class="w-full h-16 py-8 border-b border-gray-300">
        <th
          class="pl-8 pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
        >
          Mitgliedsnr.
        </th>
        <th
          class="pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
        >
          Name
        </th>
        <th
          class="pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
        >
          Adresse
        </th>
        <td
          class="pr-8 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
        >
          Mehr
        </td>
      </tr>
    </thead>
    <tbody>
      <MemberRow v-for="(user, index) in members" :key="index" :member="user" />
    </tbody>
  </table>
</template>
