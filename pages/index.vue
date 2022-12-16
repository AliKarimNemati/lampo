<template>
  <div>
    <HeroSection class="mt-5 ml-md-5 pt-5" />
    <Features class="mt-md-5 ml-md-5" />
    <Products class="mt-5" />
    <ContactUs />
  </div>
</template>

<script>

import Card from "~/components/Card.vue";

export default {
  name: "IndexPage",
  components: {Card},
  // components: { VueSlickCarousel },
};
</script>

<style>
body {
  background: #181818;
  color: white;
}
</style>
