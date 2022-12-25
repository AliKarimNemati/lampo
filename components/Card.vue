<template>
  <div class="mt-4 card-product bg-dark">
    <div class="card-img col-12">
      <img :src="'img/' + lamp.img" class="w-100 h-100" />
    </div>
    <div class="mt-3">
      <nuxt-link
        :to="'/products/' + lamp.id"
        class="text-light product-name text-decoration-none header-feature"
        >{{ lamp.name }}</nuxt-link
      >
    </div>
    <p class="text-secondary m-0">Lorem, ipsum.</p>
    <div class="d-flex justify-content-between">
      <p class="price m-0"><span class="sign">$</span>{{ lamp.price }}</p>
      <div
        class="plus rounded-circle"
        v-if="lamp.count == 0"
        @click="
          () => {
            showAlert();
            if (lamp.count == 0) {
              addItems(lamp.id);
            }
            addCartItemCount(lamp.id);
          }
        "
      >
        +
      </div>

       <div
          class="count-item  rounded d-flex flex-row-reverse"
          v-if="lamp.count > 0"
        >
          <span
            class="ml-3 plus-item bi bi-plus"
            @click="addCartItemCount(lamp.id)"
          ></span>
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

    </div>

       
    <!-- Alert -->

    <div class="alert">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>added to cart successfully</p>
        <b-progress
          variant="success"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        ></b-progress>
      </b-alert>
    </div>


  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["lamp"],
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    ...mapMutations(["addItems", "addCartItemCount","minCartItemCount","removeItems"]),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style>
.card-img {
  height: 250px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

.product-name {
  font-size: 24px;
}

.card-img img {
  border-radius: 230px 230px 30px 30px;
  transition: 0.7s;
  z-index: -100;
}

.card-img img:hover {
  transform: scale(1.04);
}
.card-product {
  border-radius: 230px 230px 30px 30px;
  padding: 16px;
  padding-top: 14px;
  padding-right: 14px;
  padding-left: 14px;
  width: 250px;
}
.price {
  font-size: 1.4rem;
}
.sign {
  color: #ff5c01;
  font-size: 1.4rem;
}
.plus {
  background: #ff5c01;
  padding: 8px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  transition: 0.5s;
  cursor: pointer;
}
.plus:hover {
  background: #eee;
  color: #ff5c01;
}

.alert {
  position: fixed;
  top: 70px;
  left: 20px;
  z-index: 100;
}

@media (max-width: 536px) {
  .card-img {
    height: 160px;
  }

  .product-name {
    font-size: 15px;
  }
}
</style>