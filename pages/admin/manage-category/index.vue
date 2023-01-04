<template>
  <div>
    <div class="p-md-5 p-4">
      <div class="p-md-5 p-4">
        <h1 class="text-center">Manage Category</h1>

        <!-- add category -->
        <div class="text-center mt-5">
          <nuxt-link
            to="/admin/manage-category/add"
            class="admin-btn text-decoration-none text-light btn p-1"
          >
            Add Category
          </nuxt-link>
        </div>

        <!-- category large mode -->
        <div class="d-none d-md-flex justify-content-center flex-wrap pb-5">
          <CategoryCard
            v-for="category in categories.slice(1, categories.length)"
            :key="category.id"
            class="ml-3"
            :category="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      category: this.$store.getters.getCategoryById(1),
    };
  },
  computed: {
    ...mapState(["categories"]),
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
