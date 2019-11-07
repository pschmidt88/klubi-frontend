<script>
export default {
  name: 'TailwindLayout',
  head: {
    bodyAttrs: {
      class: 'bg-gray-200 font-sans antialiased'
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-indigo-900 text-center p-4 px-6 flex items-center h-16">
      <div class="lg:w-1/4 xl:w-1/5 pr-8">
        <a
          href="#"
          class="flex justify-start pl-6 font-semibold text-xl text-white items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-8 h-8 fill-current"
          >
            <path
              d="M19.025 3.587c-4.356 2.556-4.044 7.806-7.096 10.175-2.297 1.783-5.538.88-7.412.113 0 0-1.27 1.603-2.181 3.74-.305.717-1.644-.073-1.409-.68C3.905 9.25 14.037 5.416 14.037 5.416s-7.149-.303-11.927 5.94c-.128-1.426-.34-5.284 3.36-7.65 5.016-3.211 14.572-.715 13.555-.119z"
            />
          </svg>
          <span class="ml-1">Klubi</span>
        </a>
      </div>
      <div id="mobile-nav-trigger" class="lg:hidden pr-3">
        <div class="toggle p-2 block"><span></span></div>
      </div>
      <div
        class="flex flex-grow items-center justify-center text-white no-underline"
      >
        <a
          href="#"
          class="text-sm text-right py-2 px-3 hover:text-gray-500 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-1 fill-current"
          >
            <path
              class="heroicon-ui"
              d="M11 20v-2.08a6 6 0 0 1-4.24-3A4.02 4.02 0 0 1 2 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v5a4 4 0 0 1-4.76 3.93A6 6 0 0 1 13 17.92V20h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h4zm6.92-7H18a2 2 0 0 0 2-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 0 1 6 12V6H4v5a2 2 0 0 0 2.08 2zM8 4v8a4 4 0 1 0 8 0V4H8z"
            />
          </svg>
          <span class="hidden lg:block">
            Verein
          </span>
        </a>
        <a
          href="#"
          class="text-sm text-right py-2 px-3 hover:text-gray-500 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-1 fill-current"
          >
            <path
              d="M9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2zm1-5a1 1 0 0 1 0-2 5 5 0 0 1 5 5v2a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3zm-2-4a1 1 0 0 1 0-2 3 3 0 0 0 0-6 1 1 0 0 1 0-2 5 5 0 0 1 0 10z"
            />
          </svg>
          <span class="hidden lg:block">
            Mitglieder
          </span>
        </a>
        <a
          href="#"
          class="text-sm text-right py-2 px-3 hover:text-gray-500 items-center flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-1 fill-current"
          >
            <path
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"
            />
          </svg>
          <span class="hidden lg:block">
            Finanzen
          </span>
        </a>
        <a
          href="#"
          class="text-sm text-right py-2 px-3 hover:text-gray-500 items-center flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-1 fill-current"
          >
            <path
              d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z"
            />
          </svg>
          <span class="hidden lg:block">
            Kalender
          </span>
        </a>
      </div>
      <div class="flex items-center justify-end text-white hover:text-gray-500">
        <a
          href="#"
          class="text-sm text-right py-2 px-3  no-underline flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-1 fill-current"
          >
            <path
              d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
          <span class="hidden xl:block">
            Einstellungen
          </span>
        </a>
        <span class="relative ml-4">
          <input
            type="search"
            placeholder="Search"
            class="w-full text-sm text-white transition border border-transparent focus:outline-none focus:border-indigo placeholder-white rounded bg-indigo-800 py-1 px-2 pl-10 appearance-none leading-normal ds-input"
          />
          <div class="absolute search-icon" style="top: .5rem; left: .8rem;">
            <svg
              class="fill-current pointer-events-none text-white w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              ></path>
            </svg>
          </div>
        </span>
      </div>
    </div>

    <div class="flex">
      <nav>//sidebar</nav>

      <div id="content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
