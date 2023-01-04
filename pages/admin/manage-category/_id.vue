<template>
  <div class="mt-5">
    <div class="d-flex flex-column justify-content-center h-100 mt-5 pt-5">
      <div class="edit col-md-5 col-10 rounded-lg p-5">
        <b-form @submit.stop.prevent class="inputs mt-4">
          <!-- category name -->
          <b-form-input
            v-model="categoryName"
            class="rounded-pill text-center text-light d-flex"
            placeholder="product name"
          ></b-form-input>

          <!-- image url -->
          <b-form-input
            v-model="imageUrl"
            class="rounded-pill text-center text-light d-flex mt-4"
            placeholder="image url"
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
export default {
  data() {
    return {
      category: this.$store.getters.getCategoryById(this.$route.params.id),
      categoryName: "",
      imageUrl: "",
    };
  },

  mounted() {
    this.categoryName = this.category ? this.category.name : "";
    this.imageUrl = this.category ? this.category.img : "";
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