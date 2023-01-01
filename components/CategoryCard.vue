<template>
  <div class="mt-4 card-product-cat bg-dark">
    <div class="card-img-cat col-12">
      <img :src="'img/' + category.img" class="w-100 h-100" />
    </div>
    <div class="mt-3">
      <nuxt-link
        :to="'/category/' + category.id"
        class="text-light product-name text-decoration-none header-feature"
        >{{ category.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style>
.card-img-cat {
  height: 200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

.product-name-cat {
  font-size: 24px !important;
}

.card-img-cat img {
  border-radius: 15px;
  transition: 0.7s;
  z-index: -100;
}

.card-img-cat img:hover {
  transform: scale(1.04);
}
.card-product-cat {
  border-radius: 10px;
  padding: 16px;
  padding-top: 14px;
  padding-right: 14px;
  padding-left: 14px;
  width: 250px;
}

@media (max-width: 536px) {
  .card-img-cat {
    height: 160px;
  }

  .product-name-cat {
    font-size: 15px;
  }
}
</style>