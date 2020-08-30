<script lang="ts">
import { mixin as clickaway } from 'vue-clickaway'
import { ref, defineComponent } from '@vue/composition-api'
import NavigationLink from '~/components/partials/layouts/MainNavigationLink.vue'

export default defineComponent({
  mixins: [clickaway],
  components: { NavigationLink },
  setup() {
    const profileMenuVisibility = ref(false)
    const mobileMenuVisibility = ref(false)

    function closeProfileMenu() {
      profileMenuVisibility.value = false
    }

    function toggleProfileMenu() {
      profileMenuVisibility.value = !profileMenuVisibility.value
    }

    function toggleMobileMenu() {
      mobileMenuVisibility.value = !mobileMenuVisibility.value
    }

    return {
      mobileMenuVisibility,
      profileMenuVisibility,
      closeProfileMenu,
      toggleProfileMenu,
      toggleMobileMenu,
    }
  },
})
</script>

<template>
  <nav class="bg-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              src="/img/workflow-mark-on-dark.svg"
              alt="Logo"
              class="w-8 h-8"
            />
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10">
              <navigation-link to="/" exact>Dashboard</navigation-link>
              <navigation-link to="/members">Mitglieder</navigation-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <button
              class="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <svg
                class="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div class="relative ml-3">
              <div>
                <button
                  v-on-clickaway="closeProfileMenu"
                  class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                  @click="toggleProfileMenu()"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <transition
                enter-class="transform scale-95 opacity-0"
                enter-active-class="transition duration-300 ease-out"
                enter-to-class="transform scale-100 opacity-100"
                leave-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div
                  v-if="profileMenuVisibility"
                  class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                >
                  <div class="py-1 bg-white rounded-md shadow-xs">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Your Profile</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Settings</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >Sign out</a
                    >
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <button
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            @click="toggleMobileMenu()"
          >
            <svg
              class="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{
                  hidden: mobileMenuVisibility,
                  'inline-flex': !mobileMenuVisibility,
                }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{
                  hidden: !mobileMenuVisibility,
                  'inline-flex': mobileMenuVisibility,
                }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      v-bind="{ block: mobileMenuVisibility, hidden: !mobileMenuVisibility }"
    >
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
          >Dashboard</a
        >
        <a
          href="#"
          class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Team</a
        >
        <a
          href="#"
          class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Projects</a
        >
        <a
          href="#"
          class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Calendar</a
        >
        <a
          href="#"
          class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Reports</a
        >
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div class="mt-1 text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="px-2 mt-3">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Your Profile</a
          >
          <a
            href="#"
            class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Settings</a
          >
          <a
            href="#"
            class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
