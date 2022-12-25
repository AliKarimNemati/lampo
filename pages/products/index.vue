<template>
  <div class="">
    <div class="col-12 banner mt-5 pt-4 p-0">
      <img src="img/banner.jpg" class="rounded w-100 h-100" />
    </div>

    <div class="p-md-5 p-4">
      <div class="p-md-5 p-4">
        <h2 class="text-center header-feature h1">All Products</h2>
        <div class="mt-5 text-center">
          <select class="col-md-3 col-10">
            <option value="all">All Lamp</option>
            <option value="study">Study Lamp</option>
            <option value="kitchen">Kitchen Lamp</option>
            <option value="livingRoom">Living Room Lamp</option>
          </select>
        </div>
      </div>

      <div class="d-flex flex-wrap justify-content-center">
        <Card
          v-for="product in products"
          :key="product.id"
          :lamp="product"
          class="
            ml-md-4
            mr-md-4
            mt-md-4
            col-md-2 col-5
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

export default {
  computed: {
    ...mapState(["products"]),
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