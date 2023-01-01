<template>
  <div class="p-md-5 p-4 mt-5">
    <div class="d-flex justify-content-center border-bottom pb-5 mt-md-0 mt-5">
      <div class="col-md-3 col-4 align-self-center">
        <h2 class="header-feature">{{ category.name }}</h2>
        <p class="text-secondary d-md-block d-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          aut.
        </p>
      </div>
      <div class="col-md-4 col-8 cat-img">
        <img :src="'/img/' + category.img" class="w-100" />
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center">
      <Card
        v-for="product in categoryProducts"
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
</template>

<script>
export default {
  data() {
    return {
      categoryProducts: this.$store.getters.getProductByCategory(
        this.$route.params.id
      ),
      category: this.$store.getters.getCategoryById(this.$route.params.id),
    };
  },
};
</script>

<style>
.cat-img img {
  height: 300px;
  border-radius: 10px;
}

@media(max-width: 768px) {
  .cat-img img {
    height: 200px;
  }
}
</style>