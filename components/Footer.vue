<template>
  <div>
    <div class="w-full bg-gray-dark pb-14 min-h-full">
      <div class="container mx-auto">
        <h1 class="pt-16 text-center text-left font-semibold text-gray-font text-3xl">Nuxt<span class="text-green-secondary">JS</span> Newsletter</h1>
        <p class="font-medium text-gray-300 text-center py-4">Get the latest Nuxt news to your inbox, curated by the core team and contributors.</p>
        <form class="flex justify-center">
          <input
            type="text"
            class="px-6 py-3 w-48 md:w-64  bg-white placeholder-gray-500 rounded-r-none rounded-l-md border outline-none focus:border-green-500 text-gray-dark"
            required
            placeholder="Email"
          >
          <button class="uppercase text-gray-font px-6 py-3 rounded-l-none rounded-r-md focus:border-green-500 focus:outline-none  bg-green-secondary hover:bg-green-light">subcribe</button>
        </form>
      </div>
    </div>

    <div class="w-full bg-gray-background xl:border-b border-gray-600 min-h-full">
      <div class="container mx-auto">
        <div class="flex pt-10 pb-10  flex-col sm:flex-row justify-between">
          <div class="flex items-center mb-10 sm:mb-0 sm:items-start flex-col">
            <h1 class="mb-6 text-left font-semibold text-gray-font text-lg uppercase">Discover</h1>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 font-semibold text-gray-500 hover:text-green-secondary hover:no-underline"
            >
              Design resources
            </NLink>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 font-semibold text-gray-500 hover:text-green-secondary hover:no-underline"
            >
              A worldwide team
            </NLink>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-gray-500 hover:text-green-secondary"
            >
              Blog
            </NLink>
          </div>

          <div class="flex mb-10 xl:mb-0 items-center flex-col">
            <h1 class="mb-6 text-left font-semibold text-gray-font text-lg uppercase">Follow</h1>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 font-semibold text-gray-500 hover:text-green-secondary hover:no-underline"
            >
              Github
            </NLink>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 font-semibold text-gray-500 hover:text-green-secondary hover:no-underline"
            >
              Twitter
            </NLink>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-gray-500 hover:text-green-secondary"
            >
              Discord
            </NLink>
          </div>
          <div class="flex items-center sm:items-end flex-col">
            <h1 class="mb-6 text-left font-semibold text-gray-font text-lg uppercase">Support</h1>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 font-semibold text-gray-500 hover:text-green-secondary hover:no-underline"
            >
              Support NuxtJS
            </NLink>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-4 font-semibold text-gray-500 hover:text-green-secondary hover:no-underline"
            >
              The NuxtJS Shop
            </NLink>
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-gray-500 hover:text-green-secondary"
            >
              NuxtJS Consulting
            </NLink>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full pb-16 lg:pb-0 bg-gray-background min-h-full">
      <div class="container mx-auto">
        <div class="flex py-4 flex-row items-center justify-between">
          <div class="flex flex-col">
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="py-2 px-4 rounded-full bg-gray-dark text-gray-400 font-medium"
            >
              <div class="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 absolute show"
                  data-v-5b549679=""
                >
                  <path
                    d="M20.3542 15.3542L21.2821 15.7271C21.4314 15.3554 21.3446 14.9304 21.0613 14.6471C20.778 14.3639 20.353 14.277 19.9813 14.4264L20.3542 15.3542ZM8.64581 3.64587L9.57369 4.01876C9.72307 3.64704 9.6362 3.22204 9.35292 2.93877C9.06964 2.65549 8.64465 2.56861 8.27293 2.718L8.64581 3.64587ZM19.9813 14.4264C19.0613 14.7961 18.0557 15.0001 17 15.0001V17.0001C18.3155 17.0001 19.5739 16.7455 20.7271 16.2821L19.9813 14.4264ZM17 15.0001C12.5817 15.0001 9 11.4183 9 7.00006H7C7 12.5229 11.4772 17.0001 17 17.0001V15.0001ZM9 7.00006C9 5.94438 9.20396 4.93879 9.57369 4.01876L7.71794 3.27299C7.25452 4.42612 7 5.6846 7 7.00006H9ZM4 12.0001C4 8.6372 6.07526 5.75664 9.0187 4.57375L8.27293 2.718C4.59771 4.19496 2 7.79294 2 12.0001H4ZM12 20.0001C7.58172 20.0001 4 16.4183 4 12.0001H2C2 17.5229 6.47715 22.0001 12 22.0001V20.0001ZM19.4263 14.9814C18.2434 17.9248 15.3629 20.0001 12 20.0001V22.0001C16.2071 22.0001 19.8051 19.4024 21.2821 15.7271L19.4263 14.9814Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span class="ml-7">Dark</span>
              </div>
            </NLink>
          </div>

          <div class="flex hidden sm:block mx-auto items-center">
            <NLink
              to="#"
              target="_blank"
            >
              <img
                class="w-7 ml-16 mx-auto"
                src="@/static/icon-white.png"
                alt="nuxt-logo"
              />
            </NLink>
          </div>

          <div class="flex items-end flex-col">
            <NLink
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              class="py-2 px-4 rounded-full bg-gray-dark text-gray-400 font-medium"
            >
              <div class="flex items-center">
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current"
                >
                  <path
                    d="M8 0C3.58064516 0 0 3.58064516 0 8c0 4.4193548 3.58064516 8 8 8 4.4193548 0 8-3.5806452 8-8 0-4.41935484-3.5806452-8-8-8zm6.2322581 4.90322581h-2.6612904c-.2903225-1.43225807-.7774193-2.65161291-1.3935483-3.51935484 1.7741935.58709677 3.232258 1.86774193 4.0548387 3.51935484zM10.8387097 8c0 .73870968-.0516129 1.42580645-.1387097 2.0645161H5.3C5.21290323 9.42580645 5.16129032 8.73870968 5.16129032 8c0-.73870968.05161291-1.42580645.13870968-2.06451613h5.4c.0870968.63870968.1387097 1.32580645.1387097 2.06451613zM8 1.03225806c.86774194 0 1.98064516 1.42258065 2.5193548 3.87096775H5.48064516C6.01935484 2.45483871 7.13225806 1.03225806 8 1.03225806zm-2.17741935.35161291c-.61290323.86451613-1.10322581 2.08387097-1.39354839 3.51935484H1.76774194C2.59032258 3.2516129 4.0483871 1.97096774 5.82258065 1.38387097zM1.03225806 8c0-.71935484.10967742-1.41290323.31290323-2.06451613h2.91935484C4.18064516 6.59677419 4.12903226 7.28387097 4.12903226 8c0 .71612903.04838709 1.40322581.13548387 2.0645161H1.34516129C1.14193548 9.41290323 1.03225806 8.71935484 1.03225806 8zm.73548388 3.0967742h2.66129032c.29032258 1.4322581.77741935 2.6516129 1.39354839 3.5193548-1.77419355-.5870967-3.23225807-1.8677419-4.05483871-3.5193548zM8 14.9677419c-.86774194 0-1.98064516-1.4225806-2.51935484-3.8709677h5.03870964C9.98064516 13.5451613 8.86774194 14.9677419 8 14.9677419zm2.1774194-.3516129c.6129032-.8645161 1.1032258-2.0838709 1.3935483-3.5193548h2.6612904c-.8225807 1.6516129-2.2806452 2.9322581-4.0548387 3.5193548zm1.5580645-4.5516129c.0838709-.66129029.1354838-1.34838707.1354838-2.0645161s-.0483871-1.40322581-.1354838-2.06451613h2.9193548c.2032258.6516129.3129032 1.34516129.3129032 2.06451613 0 .71935484-.1096774 1.41290323-.3129032 2.0645161h-2.9193548z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
                <span class="ml-2 mr-8">Indonesian</span>
                <svg
                  width="14"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current -ml-4"
                >
                  <path
                    d="M6.35416667 7.825L.1875 1.70833333C-.00833333 1.5125-.00833333 1.19583333.1875 1l.825-.825c.19583333-.19583333.5125-.19583333.70833333 0l4.9875 4.9375L11.6958333.175c.1958334-.19583333.5125-.19583333.7083334 0l.825.825c.1958333.19583333.1958333.5125 0 .70833333L7.0625 7.825c-.19583333.19583333-.5125.19583333-.70833333 0z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </NLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  layout: "web"
};
</script>

<style scoped>
</style>
