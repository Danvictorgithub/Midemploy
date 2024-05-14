<template>
  <div class="bg-white">
    <div class="flex justify-center h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/3"
        style="background-image: url('/signin.jpeg')"
      >
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-2xl font-bold sm:text-3xl text-yellow-300">
              Midemploy
            </h2>

            <p class="max-w-xl mt-3 text-white text-lg">
              A map-service for finding local jobs. Sidehustles made easier in
              the palm of your hands
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <div class="flex justify-center mx-auto">
              <img class="w-auto h-7 sm:h-8" src="/favicon.png" alt="" />
            </div>

            <p class="mt-3 text-gray-500">Sign in to access your account</p>
          </div>

          <div class="mt-8">
            <form>
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600"
                  >Email Address</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-yellow-400 :border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600"
                    >Password</label
                  >
                  <a
                    href="#"
                    class="text-sm text-gray-400 focus:text-yellow-500 hover:text-yellow-500 hover:underline"
                    >Forgot password?</a
                  >
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-yellow-400 :border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <button
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p class="mt-6 text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <NuxtLink
                to="/signup"
                class="text-yellow-500 focus:outline-none focus:underline hover:underline"
                >Sign up</NuxtLink
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
