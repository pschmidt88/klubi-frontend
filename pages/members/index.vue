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
      <nuxt-link
        class="px-2 py-2 ml-auto text-gray-200 bg-indigo-700 rounded"
        to="/members/create"
      >
        Neues Mitglied
      </nuxt-link>
    </div>
    <div class="px-4 py-4 mt-2 text-gray-800 bg-white rounded shadow-md">
      <div class="flex text-xs font-semibold text-gray-600">
        <span class="w-2/6 mr-2 ">Name</span>
        <span class="w-2/6">Addresse</span>
        <span class="w-2/6">Kontakt</span>
      </div>

      <div class="mt-4">
        <div
          v-for="user in users"
          :key="user.id"
          class="flex py-2 text-gray-800 border-b"
        >
          <div class="w-2/6 mr-2">
            <span class="text-xs text-gray-500">{{ user.id }}</span>
            <br />
            {{ user.name }}
          </div>
          <span class="w-2/6">{{ user.address }} <br />{{ user.city }}</span>
          <span class="w-2/6">{{ user.contact.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
