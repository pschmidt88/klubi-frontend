<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import { mixin as clickaway } from 'vue-clickaway'
import { Member } from '~/types/member'

export default defineComponent({
  mixins: [clickaway],
  props: {
    member: {
      type: Object as PropType<Member>,
      default: {},
    },
  },
  setup() {
    const contextMenuHidden = ref(true)

    function toggleDropDown() {
      contextMenuHidden.value = !contextMenuHidden.value
    }

    function closeContextMenu() {
      contextMenuHidden.value = true
    }

    return {
      contextMenuHidden,
      toggleDropDown,
      closeContextMenu,
    }
  },
})
</script>

<template>
  <tr class="h-24 border-b border-gray-300">
    <td
      class="pl-8 pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap"
    >
      {{ member.id }}
    </td>

    <td class="py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10">
          <img
            class="w-10 h-10 rounded-full"
            :src="`https://i.pravatar.cc/256?u=${member.id}`"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
          <div class="text-sm text-gray-500">{{ member.contact.email }}</div>
        </div>
      </div>
    </td>

    <td class="text-sm text-gray-800 whitespace-nowrap">
      <div class="text-sm font-medium">{{ member.address }}</div>
      <div class="text-sm">{{ member.city }}</div>
    </td>

    <td class="relative pr-8">
      <transition
        enter-class="transform scale-95 opacity-0"
        enter-active-class="transition duration-300 ease-out"
        enter-to-class="transform scale-100 opacity-100"
        leave-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="!contextMenuHidden"
          class="absolute left-0 z-10 w-32 mt-8 -ml-12 shadow-md dropdown-content"
        >
          <ul class="py-1 bg-white rounded shadow dark:bg-gray-800">
            <li
              class="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white"
            >
              Edit
            </li>
            <li
              class="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white"
            >
              Delete
            </li>
          </ul>
        </div>
      </transition>
      <button
        v-on-clickaway="closeContextMenu"
        class="text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none"
        @click="toggleDropDown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-dots-vertical dropbtn"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      </button>
    </td>
  </tr>
</template>
