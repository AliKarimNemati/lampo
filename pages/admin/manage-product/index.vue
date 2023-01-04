<template>
  <div>
    <div class="p-md-5 p-4">
      <div class="p-md-5 p-4">
        <h1 class="text-center">Manage Product</h1>

        <!-- add product -->
        <div class="text-center mt-5">
          <nuxt-link
            to="/admin/manage-product/add"
            class="admin-btn text-decoration-none text-light btn p-1"
          >
            Add Product
          </nuxt-link>
        </div>
        <!-- category -->
        <div class="mt-5 text-center">
          <select
            class="col-md-3 col-10"
            @change="changeCategory"
            v-model="categoryId"
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
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

export default {
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

  methods: {
    changeCategory() {
      this.productByCategory = this.$store.getters.getProductByCategory(
        this.categoryId
      );

      this.category = this.$store.getters.getCategoryById(this.categoryId);
    },
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

.admin-btn {
  background: #ff5c01;
}

</style>
