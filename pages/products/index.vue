<template>
  <div>
    <div class="col-12 banner mt-5 pt-4 p-0">
      <img src="img/banner.jpg" class="rounded w-100 h-100" />
    </div>

    <div class="p-md-5 p-3">
      <div>
        <h2 class="text-center header-feature h1">{{ category.name }}</h2>

        <!-- category large mode -->
        <div
          class="
            d-none d-lg-flex
            justify-content-center
            flex-wrap
            border-bottom
            pb-5
          "
        >
          <CategoryCard
            v-for="category in categories.slice(0, 4)"
            :key="category.id"
            class="ml-3"
            :category="category"
          />
        </div>

        <VueSlickCarousel
          :arrows="false"
          :dots="false"
          :slidesToShow="2"
          :autoplay="true"
          :speed="2000"
          class="col-12 col-md-10 ml-auto mr-auto d-lg-none d-block mt-4"
        >
          <CategoryCard
            v-for="category in categories.slice(0, 4)"
            :key="category.id"
            class="col-11 mb-4"
            :category="category"
          />
        </VueSlickCarousel>
      </div>

      <div class="d-flex flex-wrap justify-content-center">
        <Card
          v-for="product in productByCategory"
          :key="product.id"
          :lamp="product"
          class="
            ml-md-4
            mr-md-4
            mt-md-4
            col-lg-2 col-md-4 col-5
            mr-md-0
            ml-md-0
            mr-2
            ml-2
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components:{VueSlickCarousel},
  data() {
    return {
      categoryId: 1,
      productByCategory: this.$store.getters.getProductByCategory(1),
      category: this.$store.getters.getCategoryById(1),
    };
  },
  computed: {
    ...mapState(["products", "categories"]),
  },

  head() {
    return {
      title: "Products",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Lampo is the the best website for buying modern lamp",
        },
      ],
    };
  },
};
</script>


<style>
body {
  background: #181818;
  color: #eee;
}

.product-type,
select {
  height: 40px;
  background-color: #343a40;
  color: #eee;
}

.banner {
  height: 250px;
  filter: brightness(0.3);
}

@media (max-width: 767px) {
  .banner {
    height: 200px;
  }
}
</style>