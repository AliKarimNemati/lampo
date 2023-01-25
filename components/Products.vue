<template>
  <div class="p-md-5 p-4" id="products">
    <h2 class="header-feature h1 text-center">Our Products</h2>
    <p class="text-secondary text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ex?
    </p>
    <div
      class="
        d-none d-md-flex
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

    <VueSlickCarousel
      :arrows="false"
      :dots="false"
      :slidesToShow="2"
      :autoplay="true"
      :speed="2000"
      class="col-12 ml-auto mr-auto d-md-none d-block"
    >
      <Card
        v-for="product in products.slice(0, 8)"
        :key="product.id"
        :lamp="product"
        class="col-11 mb-4"
      />
    </VueSlickCarousel>

    <div class="text-center mt-md-5 mt-3">
      <nuxt-link to="/products" class="view-all rounded-pill p-2 pr-4 pl-4 mb-2 text-decoration-none">
        View All Product
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { mapState } from "vuex";
export default {
  components: {VueSlickCarousel},
  computed: {
    ...mapState(["products"]),
  },

};
</script>

<style>
.view-all {
  border: 1.6px solid #ff5c01;
  background: #181818;
  color: #eee;
  font-size: 0.9rem;
  transition: 0.5s;
}

.view-all:hover {
  background: #ff5c01;
  color: #181818 !important;
}
</style>