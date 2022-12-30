<template>
  <div class="top-nav">
    <!-- desktop mode -->
    <b-navbar toggleable="lg" type="dark" class="pr-lg-5 pr-2 pl-lg-5 pl-2">
      <i
        class="bi bi-list h1 text-light menu-icon d-lg-none d-block m-2"
        v-b-toggle.sidebar-backdrop
      ></i>
      <div class="d-block d-md-none">
        <nuxt-link to="signin" class="text-light text-decoration-none mr-2"
          >Sign in</nuxt-link
        >
        <nuxt-link
          to="signup"
          class="text-light text-decoration-none border rounded-lg p-1 px-2"
          >Sign up</nuxt-link
        >
        <nuxt-link
          to="/cart"
          class="text-light mb-4 mt-3 mr-4 ml-4 m-0 pt-1 bi bi-bag-dash h3"
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
        <b-navbar-nav>
          <b-navbar-brand to="/" class="navbar-brand">Lampo</b-navbar-brand>
          <b-nav-item to="/#products" active>Product</b-nav-item>
          <b-nav-item to="/#features" active>Features</b-nav-item>
          <b-nav-item to="/#contact-us" active>Contact</b-nav-item>
        </b-navbar-nav>
        <div class="d-flex">
          <input
            type="search"
            class="search-input mr-4 text-light rounded-pill"
            placeholder="search"
          />
          <nuxt-link to="signin" class="text-light text-decoration-none mr-3 signup-btn align-self-center"
            >Sign in</nuxt-link
          >
          <nuxt-link
            to="signup"
            class="text-light text-decoration-none border rounded-lg p-1 px-2 mr-3 signup-btn align-self-center"
            >Sign up</nuxt-link
          >
          <nuxt-link to="/cart" class="text-light m-0 pt-1 bi bi-bag-dash h3">
            <b-badge
              variant="light"
              class="rounded-circle cart-icon-count"
              :class="{ 'd-none': this.cart.length == 0 }"
              >{{ this.$store.getters.getItemsCount }}</b-badge
            >
          </nuxt-link>
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
            to="/#products"
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

export default {
  name: "navbar",
  data() {
    return {
      openNav: true,
      cartItems: 0,
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    handleOpenNav() {
      this.openNav = !this.openNav;
    },
  },

  mounted() {},
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
  z-index: 150;
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

.signup-btn{
  font-family: sans-serif;
}
</style>