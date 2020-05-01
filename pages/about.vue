<template>
  <div class="wrapper-body bg-gray-dark min-h-screen antialiased">
    <Banner />
  </div>
</template>

<script>
import Banner from "@/components/about/Banner";

export default {
  head() {
    return {
      title: `EkshoApp - About`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Page 1 description"
        }
      ]
    };
  },
  layout: "web",
  components: {
    Banner
  }
};
</script>
