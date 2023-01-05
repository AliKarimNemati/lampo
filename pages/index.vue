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
  components: { Card },

  mounted() {
    const paraObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-txt-para-show");
        } else {
          entry.target.classList.remove("hero-txt-para-show");
        }
      });
    });
    const hiddenPara = document.querySelectorAll(".hero-txt-para-hidden");
    hiddenPara.forEach((el) => paraObserver.observe(el));
  },


};
</script>

<style>
body {
  background: #181818;
  color: white;
}
</style>
