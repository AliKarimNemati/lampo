<template>
  <div class="p-md-5 p-4 mt-5">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      class="fixed-top"
    >
      You buy {{ count }} items successfully.
    </b-alert>
    <h1 class="mt-5 text-center mb-5 header-feature">Check Out</h1>
    <div
      :class="{
        'd-none': this.cart.length == 0,
        'd-block': this.cart.length != 0,
      }"
    >
      <table class="table text-light col-md-10 text-center mx-auto">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" class="col-md-3">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Number</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cartItem, i) in cart" :key="cartItem.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ cartItem.name }}</td>
            <td>${{ cartItem.price }}</td>
            <td>{{ cartItem.count }}</td>
            <td>{{ cartItem.count * cartItem.price }}</td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-center">Total: ${{ total }}</h3>

      <Form v-if="cart.length != 0" />

      <div class="text-center mt-5">
        <button
          class="text-light btn shop-btn rounded-pill p-2 pl-4 pr-4 mr-3"
          @click="
            emptyCart();
            showAlert();
          "
        >
          Buy
        </button>
      </div>
    </div>

    <div
      class="h3 text-secondary text-center"
      :class="{
        'd-none': this.cart.lenght != 0,
        'd-block': this.cart.length == 0,
      }"
    >
      Check out is empty
      <div class="text-center mt-5">
        <nuxt-link
          class="text-light btn shop-btn rounded-pill p-2 pl-4 pr-4 mr-3"
          to="/"
        >
          Home
        </nuxt-link>
      </div>
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
      count: this.$store.getters.getItemsCount,

      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },

  computed: {
    ...mapState(["cart"]),
  },

  methods: {
    ...mapMutations(["emptyCart"]),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },

  head() {
    return {
      title: 'Check out',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Lampo is the the best website for buying modern lamp",
        },
      ],
    };
  },
};
</script>

<style>
body {
  color: #eee;
  background: #181818;
}
</style>