<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@vue/composition-api'
import { Member } from '~/types/member'
import MemberRow from '~/components/members/datatable/MemberRow.vue'
import Pagination from '~/components/pagination/Pagination.vue'

export default defineComponent({
  components: { MemberRow, Pagination },
  props: {
    members: {
      type: Array as PropType<Array<Member>>,
      default: () => [],
    },
  },
  setup(props) {
    const perPage = ref(10)
    const memberRef = ref(props.members)
    const currentPage = ref(1)
    const total = ref(props.members.length)
    const totalPages = ref(Math.ceil(total.value / perPage.value))

    function jumpToPage(page: number) {
      currentPage.value = page
    }

    const data = computed(() => {
      return memberRef.value.slice(
        (currentPage.value - 1) * perPage.value,
        currentPage.value * perPage.value
      )
    })

    return { data, total, totalPages, currentPage, jumpToPage }
  },
})
</script>

<template>
  <div>
    <div
      class="flex items-start justify-end w-full p-4 lg:p-8 md:items-stretch"
    >
      <div class="flex items-center md:ml-6">
        <nuxt-link
          class="flex items-center h-8 px-5 text-sm text-indigo-700 transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300"
          to="/members/create"
        >
          {{ $t('members.list.create-member') }}
        </nuxt-link>
      </div>
    </div>

    <div class="w-full overflow-x-scroll sm:overflow-x-hidden">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="w-full h-16 py-8 border-b border-gray-300">
            <th
              class="pl-8 pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
            >
              Name
            </th>
            <th
              class="pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
            >
              Adresse
            </th>
            <th
              class="pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
            >
              Wohnort
            </th>
            <td
              class="pr-8 text-sm font-normal leading-4 tracking-normal text-left text-gray-600"
            >
              Mehr
            </td>
          </tr>
        </thead>
        <tbody>
          <MemberRow
            v-for="(user, index) in data"
            :key="index"
            :member="user"
          />
        </tbody>
      </table>
    </div>

    <Pagination
      :total="total"
      :total-pages="totalPages"
      :current-page="currentPage"
      @pagechanged="jumpToPage"
    />
  </div>
</template>
