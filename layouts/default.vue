<template>
  <div v-cloak>
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
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },

  mounted(){
    this.setCart;
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

[v-cloak] > * {
  display: none;
}
</style>
