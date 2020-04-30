<template>
  <div class="wrapper-body bg-gray-dark min-h-screen">
    <Navbar />
    <Banner />
  </div>
</template>

<script>
import Banner from "@/components/about/Banner";
import Navbar from "@/components/about/Navbar";

export default {
  components: {
    Banner,
    Navbar
  }
};
</script>
