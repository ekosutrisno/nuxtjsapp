<template>
  <div class="container min-h-screen flex justify-center items-center text-center mx-auto">
    <div>
      <logo />
      <h1 class="block tracking-normal text-gray-primary text-7xl font-semibold">Eko Sutrisno</h1>
      <h2 class="text-green-primary font-normal pb-5 text-4xl">Portofolio Using TailwinCss</h2>
      <div class="pt-4">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        <nuxt-link to="/about" class="button--green">About</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style >
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>