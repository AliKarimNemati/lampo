<template>
  <div class="p-4">
    <div
      class="col-lg-6 col-md-10 col-12 ml-auto mr-auto d-flex cart-item p-3 rounded mb-4"
      v-for="cartItem in cart"
      :key="cartItem.id"
    >
      <div class="col-4 cart-item-img">
        <img :src="'img/' + cartItem.img" class="w-100 h-100 rounded" />
      </div>
      <div class="ml-4">
        <nuxt-link
          :to="'products/' + cartItem.id"
          class="cart-name text-light"
          >{{ cartItem.name }}</nuxt-link
        >
        <p class="text-secondary col-8 p-0 d-lg-block d-none">
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
          adipisicing
        </p>
        <p class="h2 m-0"><span class="sign">$</span>{{ cartItem.price }}</p>
        <div class="count-item mt-3 mb-2 rounded d-flex flex-row-reverse">
          <span
            class="ml-3 plus-item bi bi-plus"
            @click="addCartItemCount(cartItem.id)"
          ></span>
          <p class="m-0 p-0">{{ cartItem.count }}</p>
          <span
            class="mr-3 minus-item bi"
            :class="{
              'bi-dash': cartItem.count > 1,
              'bi-trash3': cartItem.count <= 1,
            }"
            @click="
              () => {
                minCartItemCount(cartItem.id);

                if (cartItem.count <= 0) {
                  removeItems(cartItem.id);
                }
              }
            "
          ></span>
        </div>
        <button
          class="mb-0 remove-item"
          @click="
            {
              removeItems(cartItem.id);
            }
          "
        >
          remove
        </button>
      </div>
    </div>

    <div
      class="h3 text-secondary text-center"
      :class="{
        'd-none': this.cart.length != 0,
        'd-block': this.cart.length == 0,
      }"
    >
      Cart is empty
      <div class="text-center mt-5">
        <nuxt-link
          class="text-light btn shop-btn rounded-pill p-2 pl-4 pr-4 mr-3"
          to="/products"
        >
          Buy now
        </nuxt-link>
      </div>
    </div>
    <div
      class="text-center mt-5"
      :class="{
        'd-none': this.cart.length == 0,
        'd-block': this.cart.length != 0,
      }"
    >
      <p class="h1 m-0">Total: <span class="sign-total">$</span>{{ total }}</p>
      <nuxt-link
        class="text-light btn shop-btn rounded-pill p-2 pl-4 pr-4 mr-3 mt-5"
        to="/login"
      >
        Continue
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      total: this.$store.getters.getTotal,
    };
  },

  updated() {
    this.total = this.$store.getters.getTotal;
  },

  computed: {
    ...mapState(["cart"]),
  },

  methods: {
    ...mapMutations(["removeItems", "addCartItemCount", "minCartItemCount"]),
  },
};
</script>

<style>
.x-icon {
  width: 25px;
  height: 25px;
  background: #ff5c01;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
}

.x-icon:hover {
  color: #ff5c01;
  background: #eee;
  width: 28px;
  height: 28px;
}

.cart-item-img {
  height: 200px;
}

.cart-item {
  background: #343a40;
}

.cart-name {
  font-size: 2rem;
}

.delete-items {
  cursor: pointer;
  transition: 0.4;
}

.delete-items:hover {
  color: #eee !important;
}

.count-item {
  border: 1px #eee solid;
  background: #343a40;
  padding: 8px;
  width: 90px;
}

.plus-item,
.minus-item {
  cursor: pointer;
  color: #ff5c01;
}

.sign-total {
  color: #ff5c01;
  font-size: 1.8rem !important;
}

.remove-item {
  display: flex;
  color: #ff5c01;
  background: none;
  border: none;
}

.remove-item:hover {
  border-bottom: 1px solid #ff5c01;
}

@media (max-width: 768px) {
  .cart-item-img {
    height: 100px;
  }

  .cart-item h2 {
    font-size: 24px;
  }

  .cart-item p {
    font-size: 26px;
  }

  .delete-items {
    font-size: 16px !important;
  }

  .count-item p {
    font-size: 16px;
  }

  .cart-name {
    font-size: 1.5rem;
  }
}
</style>
