<template>
  <div>
    <div class="col-md-9 col-12 ml-auto mr-auto banner mt-5 pt-4 p-0">
      <img src="img/banner.jpg" class="rounded w-100 h-100" />
    </div>
    <div class="p-md-5 p-4">
      <h2 class="mt-3 text-center h1">All Products</h2>

      <div class="text-center mt-4">
        <b-form-select
          v-model="select"
          :options="options"
          class="product-type col-md-3 col-8 text-center"
        ></b-form-select>
      </div>

      <div class="d-flex flex-wrap justify-content-center">
        <Card
          v-for="product in products"
          :key="product.id"
          :lamp="product"
          class="
            ml-md-4
            mr-md-4
            mt-md-5
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
  data() {
    return {
      select: "all",
      options: [
        { value: "all", text: "All Lamp" },
        { value: "study", text: "Study Lamp" },
        { value: "kitchen", text: "Kitchen Lamp" },
        { value: "livingRoom", text: "Living Room Lamp" },
      ],
    };
  },

  computed: {
    ...mapState(["products"]),
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
  height: 200px;
  filter: brightness(.8);
}
</style>