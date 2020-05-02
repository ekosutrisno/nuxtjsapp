<template>
  <div>
    <Navbar />
    <div class="min-h-full">
      <nuxt />
    </div>
    <Footer />
    <NavbarFooter />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import NavbarFooter from "~/components/NavbarFooter";
export default {
  components: { Navbar, Footer, NavbarFooter }
};
</script>

<style scoped>
</style>
