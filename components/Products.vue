<template>
  <div class="p-md-5 p-4">
    <h2 class="header-feature h1 text-center">Our Products</h2>
    <p class="text-secondary text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ex?
    </p>
    <div
      class="
        d-flex
        flex-wrap
        mt-5 mt-md-0
        justify-content-center justify-md-content-start
      "
    >
      <Card
        v-for="product in products.slice(0, 8)"
        :key="product.id"
        :lamp="product"
        class="ml-md-4 mr-md-4 mt-md-5"
      />
    </div>

    <div class="text-center">
      <button class="view-all rounded-pill p-2 pr-4 pl-4 mt-4 mb-2">
        View All Product
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style>
.view-all {
  border: 1.6px solid gold;
  background: #181818;
  color: #eee;
  font-size: .9rem;
  transition: .5s;
}

.view-all:hover{
    background: gold;
    color: #181818;
}
</style>