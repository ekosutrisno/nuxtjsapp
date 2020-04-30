<template>
  <div class="navbar w-full mx-auto sm:mx-0">
    <div class="bg-gray-background fixed w-full">
      <div class="container mx-auto">
        <div class="flex flex-col xl:flex-row items-center justify-between py-4">
          <div class="flex items-end py-2">
            <img class="w-14 h-1w-14" src="@/static/nuxt-icon-white.png" alt="nuxt-logo" />
            <span class="font-semibold tracking-widest text-3xl ml-3 text-white">EKSHO</span>
            <span class="font-semibold tracking-widest text-3xl text-green-secondary">APP</span>
          </div>
          <div class="flex py-2 hidden md:block lg:block xl:block">
            <nuxt-link
              to="/"
              class="transition ease-in-out duration-300 mr-12 hover:text-green-400 font-normal uppercase text-white"
            >Guide</nuxt-link>
            <nuxt-link
              to="/"
              class="transition ease-in-out duration-300 mr-12 hover:text-green-400 font-normal uppercase text-white"
            >Api</nuxt-link>
            <nuxt-link
              to="/"
              class="transition ease-in-out duration-300 mr-12 hover:text-green-400 font-normal uppercase text-white"
            >Example</nuxt-link>
            <nuxt-link
              to="/"
              class="transition ease-in-out duration-300 mr-12 hover:text-green-400 font-normal uppercase text-white"
            >Faq</nuxt-link>
            <nuxt-link
              to="/"
              class="transition ease-in-out duration-300 mr-12 hover:text-green-400 font-normal uppercase text-white"
            >Resources</nuxt-link>
            <nuxt-link
              to="/"
              class="transition ease-in-out duration-300 hover:text-green-400 font-normal uppercase text-white"
            >Blog</nuxt-link>
          </div>
          <div class="flex py-2">
            <div class="flex relative">
              <form>
                <input
                  class="bg-gray-dark rounded-full py-2 px-8 focus:outline-none text-gray-500 font-semibold focus:text-gray-500"
                  placeholder="Cari"
                  type="text"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Ending navbar* -->
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  animation: 0.5s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>