<template>
  <img
    width="245"
    height="180"
    class="NuxtLogo mx-auto"
    src="@/static/icon-gray.png"
    alt="icon"
  >
</template>

<style scoped>
.NuxtLogo {
  animation: 1s appear;
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
