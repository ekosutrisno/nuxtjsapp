<template>
  <div class="navbar w-full mx-auto sm:mx-0">
    <div class="bg-gray-background fixed w-full border-b xl:border-b-0 border-gray-600">
      <div class="container mx-auto">
        <div class="flex flex-col xl:flex-row items-center justify-between py-4">
          <NLink to="/">
            <div class="flex items-center py-2">
              <img
                class="h-7 xl:h-10"
                src="@/static/icon-white-thin.png"
                alt="nuxt-logo"
              />
              <div>
                <div class="font-medium tracking-widest text-2xl xl:text-3xl ml-3 text-white">EKSHO<span class="tracking-widest font-medium text-green-secondary">APP</span></div>

              </div>
            </div>
          </NLink>

          <div class="flex py-2 hidden lg:block xl:block">
            <a
              href="http://localhost:8081/"
              target="_blank"
              class="transition-colors ease-in-out duration-300 mr-12 hover:text-green-light font-normal uppercase text-white"
            >Guide</a>
            <NLink
              to="/api"
              class="transition-colors ease-in-out duration-300 mr-12 hover:text-green-light font-normal uppercase text-white"
            >Api</NLink>
            <NLink
              to="/example"
              class="transition-colors ease-in-out duration-300 mr-12 hover:text-green-light font-normal uppercase text-white"
            >Example</NLink>
            <NLink
              to="/faq"
              class="transition-colors ease-in-out duration-300 mr-12 hover:text-green-light font-normal uppercase text-white"
            >Faq</NLink>
            <NLink
              to="/resources"
              class="transition-colors ease-in-out duration-300 mr-12 hover:text-green-light font-normal uppercase text-white"
            >Resources</NLink>
            <NLink
              to="/blog"
              class="transition-colors ease-in-out duration-300 hover:text-green-400 foligtext-green-lightnormal uppercase text-white"
            >Blog</NLink>
          </div>
          <div class="flex py-2">
            <div class="relative">
              <form>
                <input
                  class="bg-gray-dark rounded-full py-2 px-4 pl-10 placeholder-gray-600 focus:outline-none text-gray-500 font-semibold focus:text-gray-500"
                  placeholder="Cari"
                  type="text"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="block absolute -mt-7 ml-3 z-10 h-4 fill-current text-gray-500 transition-colors duration-300 ease-linear"
                  data-v-5cd016ce=""
                >
                  <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                </svg>
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
