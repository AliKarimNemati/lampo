<template>
  <div class="top-nav">
    <b-navbar toggleable="lg" type="dark" class="pr-lg-5 pr-2 pl-lg-5 pl-2">
      <i
        class="bi bi-list h1 text-light menu-icon d-lg-none d-block m-2"
        v-b-toggle.sidebar-backdrop
      ></i>

      <div class="d-flex d-lg-none">
        <div class="align-self-center mr-3">

          <!-- user info -->
          <div class="mr-3" v-if="isSignined">
            <b-button id="user-info" class="p-0 user-info">
              <b-avatar variant="dark"></b-avatar>
            </b-button>
            <b-popover
              target="user-info"
              triggers="hover"
              placement="bottom"
              variant="dark"
            >
              <template #title><div class="text-dark">User Info</div></template>
              <div class="p-4 text-center">
                <h5>Username</h5>
                <h5>test@gmail.com</h5>
                <button class="mt-2 p-1 align-self-center btn btn-outline-dark">
                  Sign out
                </button>
              </div>
            </b-popover>
          </div>

          <!-- signin & sign up -->
          <div v-else>
            <nuxt-link to="/signin" class="text-light text-decoration-none mr-2"
              >Sign in</nuxt-link
            >
            <nuxt-link
              to="/signup"
              class="text-light text-decoration-none signup-btn-border rounded-lg p-1 px-2"
              >Sign up</nuxt-link
            >
          </div>
        </div>

        <nuxt-link
          to="/cart"
          class="text-light align-self-center mb-2 pt-1 bi bi-bag-dash h3"
        >
          <b-badge
            variant="light"
            class="rounded-circle cart-icon-count"
            :class="{ 'd-none': this.cart.length == 0 }"
            >{{ this.$store.getters.getItemsCount }}</b-badge
          >
        </nuxt-link>
      </div>
      <div
        class="
          mt-3
          d-lg-flex
          justify-content-between
          col-12
          d-none
          header-feature
        "
      >
        <!-- desktop mode -->
        <b-navbar-nav>
          <b-navbar-brand to="/" class="navbar-brand">Lampo</b-navbar-brand>
          <b-nav-item to="/products" active>Product</b-nav-item>
          <b-nav-item to="/#features" active>Features</b-nav-item>
          <b-nav-item to="/#contact-us" active>Contact</b-nav-item>
        </b-navbar-nav>
        <div class="d-flex">
          <input
            type="search"
            class="search-input mr-4 text-light rounded-pill"
            placeholder="search"
          />

          <!-- user info -->
          <div class="mr-3" v-if="isSignined">
            <b-button id="user-info-md" class="p-0 user-info">
              <b-avatar variant="dark"></b-avatar>
            </b-button>
            <b-popover
              target="user-info-md"
              triggers="hover"
              placement="bottom"
              variant="dark"
            >
              <template #title><div class="text-dark">User Info</div></template>
              <div class="p-4 px-5 text-center d-flex flex-column">
                <h5>Username</h5>
                <h5>test@gmail.com</h5>
                <button class="mt-2 p-1 align-self-center btn btn-outline-dark" @click="manageSignout">
                  Sign out
                </button>
                <nuxt-link
                  to="/admin"
                  class="mt-2 p-1 align-self-center btn btn-outline-dark"
                >
                  admin
                </nuxt-link>
              </div>
            </b-popover>
          </div>

          <!-- signin & signup -->
          <div class="d-flex" v-else>
            <nuxt-link
              to="/signin"
              class="
                text-light text-decoration-none
                mr-3
                signup-btn
                align-self-center
              "
              >Sign in</nuxt-link
            >
            <nuxt-link
              to="/signup"
              class="
                text-light text-decoration-none
                signup-btn-border
                rounded-lg
                p-1
                px-2
                mr-3
                signup-btn
                align-self-center
              "
              >Sign up</nuxt-link
            >
          </div>

          <!-- cart button -->
          <button id="cart" class="user-info">
            <nuxt-link to="/cart" class="text-light m-0 pt-1 bi bi-bag-dash h3">
              <b-badge
                variant="light"
                class="rounded-circle cart-icon-count"
                :class="{ 'd-none': this.cart.length == 0 }"
                >{{ this.$store.getters.getItemsCount }}</b-badge
              >
            </nuxt-link>
          </button>

          <!-- cart items -->
          <b-popover
            target="cart"
            triggers="hover"
            placement="bottom"
            variant="dark"
            v-if="cart.length != 0"
          >
            <div
              v-for="(cartProduct, i) in cart.slice(0, 4)"
              :key="cartProduct.id"
              class="d-flex mt-3 pb-3 border-dark"
              :class="{ 'border-bottom': i < cart.length - 1 && i < 3 }"
            >
              <div class="col-4 p-0">
                <img
                  :src="'/img/' + cartProduct.img"
                  class="w-100 cart-card-img"
                />
              </div>
              <div class="col-8 p-0 ml-2">
                <nuxt-link
                  :to="'/products/' + cartProduct.id"
                  class="text-dark text-decoration-none h5 header-feature"
                  >{{ cartProduct.name }}</nuxt-link
                >
                <p class="price m-0">
                  <span class="sign">$</span>{{ cartProduct.price }}
                </p>
              </div>
            </div>
          </b-popover>
        </div>
      </div>
    </b-navbar>

    <!-- mobile mode -->
    <b-sidebar
      id="sidebar-backdrop"
      title="Lampo"
      backdrop-variant="dark"
      bg-variant="dark"
      text-variant="light"
      backdrop
      shadow
    >
      <div class="d-flex justify-content-between header-feature">
        <b-navbar-nav class="p-3 pt-4 nav">
          <div class="mt-2">
            <input
              type="search"
              class="search-input mr-4 text-light rounded-pill"
              placeholder="search"
            />
          </div>
          <nuxt-link
            to="/"
            class="text-light ml-4 mt-3 text-decoration-none"
            active
            >Home</nuxt-link
          >
          <nuxt-link
            to="/products"
            class="text-light ml-4 mt-3 text-decoration-none"
            active
            >Product</nuxt-link
          >
          <nuxt-link
            to="/#features"
            class="text-light ml-4 mt-3 text-decoration-none"
            active
            >Features</nuxt-link
          >
          <nuxt-link
            to="/#contact-us"
            class="text-light ml-4 mt-3 text-decoration-none"
            active
            >Contact</nuxt-link
          >
        </b-navbar-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      openNav: true,
      cartItems: 0,
    };
  },
  computed: {
    ...mapState(["cart", "isSignined"]),
    ...mapMutations(['signout'])
  },
  methods: {
    handleOpenNav() {
      this.openNav = !this.openNav;
    },
    manageSignout(){
      this.signout;
    }
  },
};
</script>

<style>
.navbar-brand {
  font-weight: 700;
}

.search-input {
  background: #2a2a2a;
  padding: 8px 16px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
}

.search-input:focus {
  outline: #ff5c01 solid 1.6px;
}

.nav {
  width: 100%;
}

.nav-link {
  transition: 0.5s;
}

.nav-link:hover {
  color: #ff5c01 !important;
}

.top-nav {
  background: #181818;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
}

.badge {
  position: relative;
  top: 16px;
  right: 10px;
  font-size: 17px;
}

.cart-icon-count {
  background: #ff5c01;
  color: #eee;
}

.signup-btn {
  font-family: sans-serif;
}

.user-info,
.user-info:hover {
  background: rgba(0, 0, 0, 0);
  border: none;
}

.cart-card-img {
  height: 80px;
  border-radius: 10px;
}

.signup-btn-border{
  border: 1.6px solid #ff5c01;
}

.signup-btn-border:hover{
  background: #ff5c01;
  color: #181818;
}
</style>