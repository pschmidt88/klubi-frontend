<template>
  <nav
    class="absolute lg:relative lg:flex bg-indigo-900 lg:bg-transparent left-0 right-0 py-4 px-6 lg:pt-10 lg:pl-12 lg:pr-6 -mt-1 lg:mt-0 lg:w-1/5 overflow-y-auto lg:border-r hidden "
  >
    <ul class="list-reset mb-8 w-full">
      <li class="ml-2 mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="h-5 w-5 mr-2 fill-current text-indigo-900"
        >
          <path
            d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z"
          />
        </svg>
        <nuxt-link to="/members">Mitgliederverzeichnis</nuxt-link>
      </li>

      <li class="ml-2 mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="w-5 h-5 mr-2 fill-current text-indigo-900"
        >
          <path
            d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"
          />
        </svg>
        <nuxt-link to="/members/create">Neues Mitglied</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
