<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { rawUsers } from '~/utility/fake_members.js'

interface User {
  id: Number
  name: String
  address: String
  city: String
  birthday: String
  contact: {
    phone: String | undefined
    email: String | undefined
  }
}

// TODO credit flaticon.com
// using three vertical dots
// Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default defineComponent({
  setup() {
    const users = ref<User[]>(rawUsers)

    return {
      users
    }
  }
})
</script>

<template>
  <div class="w-4/5 ml-auto">
    <div class="flex items-center">
      <div>
        <h1>Mitgliederübersicht</h1>
      </div>
    </div>

    <div class="py-8 mt-4 bg-white rounded shadow-md">
      <div class="flex w-full px-4">
        <div class="relative inline-block w-64">
          <input
            type="text"
            class="block w-full px-3 py-2 pl-8 leading-tight leading-snug text-gray-700 bg-gray-100 border border-gray-300 rounded appearance-none"
            placeholder="Suche"
          />

          <div
            class="absolute inset-y-0 left-0 flex items-center px-2 pl-3 text-gray-500 pointer-events-none"
          >
            <svg
              class="w-3 h-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z"
              />
            </svg>
          </div>
        </div>

        <nuxt-link
          class="flex items-center px-2 py-2 ml-auto text-sm font-medium text-gray-700 border border-gray-300 rounded"
          to="/members/create"
        >
          <svg
            class="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"
            />
          </svg>
          <span class="ml-2">
            Neues Mitglied
          </span>
        </nuxt-link>
      </div>

      <table
        class="w-full mt-8 border-t border-collapse border-gray-300 table-auto"
      >
        <thead>
          <tr class="text-sm text-left text-gray-600 bg-gray-300">
            <th class="px-2 py-4 pl-8">#</th>
            <th class="px-2 py-4">Name</th>
            <th class="px-2 py-4">Adresse</th>
            <th class="px-2 py-4">Kontakt</th>
            <th class="px-2 py-4"></th>
          </tr>
        </thead>
        <tbody class="text-sm text-gray-700">
          <tr
            v-for="(user, index) in users"
            :key="index"
            :class="index % 2 != 0 ? 'bg-gray-100' : ''"
            class="cursor-default hover:bg-gray-200"
          >
            <td class="px-2 py-4 pl-8">{{ user.id }}</td>
            <td class="px-2 py-4">{{ user.name }}</td>
            <td class="px-2 py-4">{{ user.address }}</td>
            <td class="px-2 py-4">
              {{ user.contact.phone || user.contact.email }}
            </td>
            <td class="px-2 py-4">
              <svg
                class="w-4 h-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <circle cx="256" cy="256" r="64" />
                <circle cx="256" cy="448" r="64" />
                <circle cx="256" cy="64" r="64" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
