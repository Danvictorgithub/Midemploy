<script setup lang="ts">
const isOpen = ref(false);
</script>
<template>
  <header class="relative bg-white shadow">
    <div class="container px-6 py-3 mx-auto md:flex">
      <div class="flex items-center justify-between w-full lg:w-52">
        <NuxtLink to="/" class="flex items-center gap-4 w-full">
          <NuxtImg src="/favicon.png" class="h-12" />
          <h1 class="text-lg font-bold text-zinc-600">Midemploy</h1>
          <!-- <img
            class="w-auto h-6 sm:h-7"
            src="https://merakiui.com/images/full-logo.svg"
            alt=""
          /> -->
        </NuxtLink>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden flex-1">
          <button
            x-cloak
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 hover:text-gray-600 :text-gray-400 focus:outline-none focus:text-gray-600 :text-gray-400"
            aria-label="toggle menu"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        x-cloak
        :class="[
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full',
        ]"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between"
      >
        <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
          <a
            href="#"
            class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 :bg-gray-700 md:mx-2"
            >Home</a
          >
          <a
            href="#"
            class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 :bg-gray-700 md:mx-2"
            >Jobs</a
          >
          <a
            href="#"
            class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 :bg-gray-700 md:mx-2"
            >Looking to be Hired</a
          >
        </div>

        <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
          <NuxtLink
            to="/signin"
            class="flex items-center gap-2 px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 :bg-gray-700 md:mx-2"
          >
            <Icon name="material-symbols:login" size="24px" />
            <p>sign in</p>
          </NuxtLink>
          <!-- <button
            class="flex items-center gap-2 px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 :bg-gray-700 md:mx-2"
          >
            <Icon name="material-symbols:login" size="24px" />
            <p>Employee</p>
          </button> -->
          <!-- <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 :border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Search"
          /> -->
        </div>
      </div>
    </div>
  </header>
</template>
