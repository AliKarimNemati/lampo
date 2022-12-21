<template>
  <div class="p-md-5 p-4 mt-5">
    <div
      class="d-flex flex-wrap justify-content-md-start justify-content-center"
    >
      <div class="col-md-4 col-11 mt-md-0 mt-5 product-img">
        <img :src="'../img/' + lamp.img" class="w-100 h-100 rounded-lg" />
      </div>
      <div class="col-md-8 col-11 align-self-center mt-md-0 mt-5">
        <h2 class="h1">{{ lamp.name }}</h2>
        <p class="text-secondary col-md-8 col-12 p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos eum
          doloremque in iusto corrupti deleniti dolores reiciendis?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quae eos eum doloremque
          in iusto corrupti deleniti dolores reiciendis?
        </p>

        <p class="h2 m-0 text-light ml-1">
          <span class="sign">$</span>{{ lamp.price }}
        </p>
        <div
          class="count-item mt-3 mb-3 rounded d-flex flex-row-reverse"
          v-if="lamp.count > 0"
        >
          <span class="ml-3 plus-item bi bi-plus" @click="addCartItemCount(lamp.id)"
            ></span
          >
          <p class="m-0 p-0">{{ lamp.count }}</p>
          <span
            class="mr-3 minus-item bi"
            :class="{
              'bi-dash': lamp.count > 1,
              'bi-trash3': lamp.count <= 1,
            }"
            @click="
              () => {
                minCartItemCount(lamp.id);

                if (lamp.count <= 0) {
                  removeItems(lamp.id);
                }
              }
            "
          ></span>
        </div>

        <div
          class="
            buy-btn
            rounded-lg
            col-md-2 col-4
            shop-btn
            rounded-pill
            p-2
            pl-4
            pr-4
            text-center
            mt-3
          "
          v-if="lamp.count <= 0"
          @click="
            () => {
              addItems(lamp.id);
              addCartItemCount(lamp.id);
            }
          "
        >
          Buy
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      lamp: this.$store.getters.getProductById(this.$route.params.id),
    };
  },

  methods: {
    ...mapMutations([
      "removeItems",
      "addCartItemCount",
      "minCartItemCount",
      "addItems",
    ]),
  },
};
</script>

<style>
body {
  background: #181818;
  color: #eeee;
}

.product-img {
  height: 400px;
}

.buy-btn {
  cursor: pointer;
}

.buy-btn :hover {
  background: #ff5c01;
}

@media (max-width: 768px) {
  .product-img {
    height: 300px;
  }
}
</style>
