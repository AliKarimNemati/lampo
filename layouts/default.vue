<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapMutations(["setCart"]),
  },
  beforeMount() {
    this.setCart;
  },

  beforeCreate() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 800);
    });
  },

  transition: {
    name: "home",
    mode: "out-in",
  },


};
</script>

<style>
.b-overlay {
  height: 100vh;
}
</style>
