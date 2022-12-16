<template>
  <div class="p-md-5 p-4 mt-5">
    <div class="d-flex flex-wrap">
      <div class="col-4 product-img">
        <img :src="'../img/' + lamp.img" class="w-100 h-100 rounded-lg">
      </div>
      <div class="col-8 align-self-center">
        <h2 class="h1">{{ lamp.name }}</h2>
        <p class="text-secondary col-8 p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos eum doloremque in
          iusto corrupti deleniti dolores reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos eum doloremque in
          iusto corrupti deleniti dolores reiciendis?</p>
        <p class="h2 m-0 text-light"><span class="sign">$</span>{{ lamp.price }}</p>
        <div class="count-item mt-3 mb-3 rounded d-flex" v-if="lamp.count > 0">
          <span class="mr-3 plus-item" @click="addCartItemCount(lamp.id)"
          >+</span
          >
          <p class="m-0 p-0">{{ lamp.count }}</p>
          <span
            class="ml-3 minus-item"
            @click="
              () => {
                minCartItemCount(lamp.id);

                if (lamp.count <= 0) {
                  removeItems(lamp.id);
                }
              }
            "
          >-</span
          >
        </div>

        <div
          class="buy-btn rounded-lg col-1 shop-btn rounded-pill p-2 pl-4 pr-4 text-center mt-4" v-if="lamp.count <= 0"
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
    ...mapMutations(["removeItems", "addCartItemCount", "minCartItemCount", "addItems"]),
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

.buy-btn{
  cursor: pointer;
}

.buy-btn :hover{
  background: #ff5c01;
}
</style>
