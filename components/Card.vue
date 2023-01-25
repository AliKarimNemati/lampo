<template>
  <div class="mt-4 card-product bg-dark">
    <div class="card-img col-12">
      <img :src="'/img/' + lamp.img" class="w-100 h-100" />
    </div>
    <div class="mt-3">
      <nuxt-link
        :to="'/products/' + lamp.id"
        class="text-light product-name text-decoration-none header-feature"
        >{{ lamp.name }}</nuxt-link
      >
    </div>
    <p class="text-secondary m-0 d-md-block d-none">Lorem, ipsum.</p>
    <div class="d-flex justify-content-between">
      <p class="price m-0"><span class="sign">$</span>{{ lamp.price }}</p>
      <div
        class="plus rounded-circle"
        v-if="this.$route.name != 'admin-manage-product'"
        @click="
          () => {
            showAlert();
            if (
              this.$store.getters.getItemsFromCart(Number(this.lamp.id)) == null
            ) {
              addItems(lamp.id);
              addCartItemCount(lamp.id);
            } else {
              addCartItemCount(lamp.id);
            }
          }
        "
      >
        +
      </div>

      <!-- edit btn -->
      <div class="mt-2" v-if="this.$route.name == 'admin-manage-product'">
        <nuxt-link
          :to="'/admin/manage-product/' + lamp.id"
          class="text-danger h5"
          >Edit</nuxt-link
        >
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Swal from "sweetalert2";

export default {
  props: ["lamp"],
  data() {
    return {
      itemsFromCart: this.$store.getters.getItemsFromCart(Number(this.lamp.id)),
    };
  },
  methods: {
    ...mapMutations([
      "addItems",
      "addCartItemCount",
      "minCartItemCount",
      "removeItems",
    ]),
    
    showAlert() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        width: "20rem",
        color: "#ffff",
        background: "#2a2a2a",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "added to cart successfully",
      });
    },
  },

  updated() {
    this.itemsFromCart = this.$store.getters.getItemsFromCart(
      Number(this.lamp.id)
    );
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
    font-size: 1rem;
  }

  .price {
    font-size: 1.2rem;
  }

  .sign {
    font-size: 1.2rem;
  }

  .plus {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 431px) {
  .product-name {
    font-size: 0.8rem;
  }

  .price {
    font-size: 1rem;
  }

  .sign {
    font-size: 1rem;
  }

  .plus {
    width: 25px;
    height: 25px;
  }
}
</style>