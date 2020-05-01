<template>
  <div>
    <Navbar />
    <div class="min-h-screen">
      <nuxt />
    </div>
    <Footer />
    <NavbarFooter />
  </div>
</template>

<script>
import Navbar from "~/components/about/Navbar";
import Footer from "~/components/about/Footer";
import NavbarFooter from "~/components/about/NavbarFooter";
export default {
  components: { Navbar, Footer, NavbarFooter }
};
</script>

<style scoped>
</style>
