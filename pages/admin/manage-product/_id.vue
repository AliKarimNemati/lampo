<template>
  <div class="mt-5">
    <div class="d-flex flex-column justify-content-center h-100 mt-5 pt-5">
      <div class="edit col-md-5 col-10 rounded-lg p-5">
        <!-- category mode -->
        <div class="text-center">
          <select
            class="col-md-5 col-10 text-center"
            @change="changeCategory"
            v-model="categoryId"
          >
            <option
              v-for="category in categories.slice(1, categories.length)"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <b-form @submit.stop.prevent class="inputs mt-4">
          <!-- product name -->
          <b-form-input
            v-model="productName"
            class="rounded-pill text-center text-light d-flex"
            placeholder="product name"
          ></b-form-input>

          <!-- image url -->
          <b-form-input
            v-model="imageUrl"
            class="rounded-pill text-center text-light d-flex mt-4"
            placeholder="image url"
          ></b-form-input>

          <!-- price -->
          <b-form-input
            v-model="price"
            class="rounded-pill text-center text-light d-flex mt-4"
            type="number"
            placeholder="price"
          ></b-form-input>
        </b-form>

        <div class="submit-edit">
          <input
            type="button"
            value="submit"
            class="rounded-pill d-flex mt-3 text-light p-2 pr-4 pl-4"
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
      product: this.$store.getters.getProductById(this.$route.params.id),
      categoryId: 2,
      productName: "",
      imageUrl: "",
      price: null,
    };
  },

  methods: {
    changeCategory() {
      this.productByCategory = this.$store.getters.getProductByCategory(
        this.categoryId
      );

      this.category = this.$store.getters.getCategoryById(this.categoryId);

      console.log(this.product);
    },
  },

  computed: {
    ...mapState(["categories"]),
  },

  mounted() {
    this.categoryId = this.product ? this.product.category : 2;
    this.productName = this.product ? this.product.name : "";
    this.imageUrl = this.product ? this.product.img : "";
    this.price = this.product ? this.product.price : null;
  },
};
</script>

<style>
.edit {
  background-color: #2a2a2a;
  margin: 0 auto;
}

.inputs input {
  height: 50px;
  width: 65%;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: 2px #3498db solid;
  margin: 0 auto;
  transition: 0.5s;
}

.inputs input:focus {
  width: 70%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

.submit-edit input {
  border: 2px #ff5c01 solid;
  background-color: rgba(0, 0, 0, 0);
  margin: 0 auto;
  transition: 0.5s;
}

.submit-edit input:hover {
  background-color: #ff5c01;
}

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

@media (max-width: 768px) {
  .inputs input {
    width: 80%;
  }

  .inputs input:focus {
    width: 90%;
  }
}
</style>