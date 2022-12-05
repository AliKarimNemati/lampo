<template>
  <div>
    <!-- desktop mode -->
    <b-navbar
      toggleable="lg"
      type="dark"
      class="fixed-top pr-lg-5 pr-2 pl-lg-5 pl-2"
    >
      <i
        :class="{ 'bi-list': openNav, 'bi-x': !openNav }"
        class="bi h1 text-light menu-icon d-lg-none d-block"
        @click="handleOpenNav"
      ></i>
      <div class="mt-3 d-lg-flex justify-content-between col-12 d-none">
        <b-navbar-nav>
          <b-navbar-brand to="/#" class="navbar-brand">Lampo</b-navbar-brand>
          <b-nav-item to="/" active>Product</b-nav-item>
          <b-nav-item to="/" active>Features</b-nav-item>
          <b-nav-item to="/" active>Contact</b-nav-item>
        </b-navbar-nav>
        <div class="d-flex">
          <input
            type="search"
            class="search-input mr-4 text-light rounded-pill"
            placeholder="search"
          />
          <nuxt-link
            to="/"
            class="text-light m-0 pt-1 bi bi-bag-dash h4"
          ></nuxt-link>
        </div>
      </div>
    </b-navbar>

    <!-- mobile mode -->
    <div
      :class="{'nav-parent': !openNav }"
      class="d-flex justify-content-between"
    >
      <b-navbar-nav
        class="nav p-3 pt-4"
        :class="{ openNav: openNav }"
        v-if="!openNav"
      >
        <b-navbar-brand to="/#" class="navbar-brand text-light text-center"
          >Lampo</b-navbar-brand
        >
        <div class="mt-2">
          <input
            type="search"
            class="search-input mr-4 text-light rounded-pill ml-auto mr-auto"
            placeholder="search"
          />
        </div>
        <nuxt-link
          to="/"
          class="text-light m-0 pt-1 bi bi-bag-dash h4 text-center mt-2"
        ></nuxt-link>
        <nuxt-link to="/" class="text-light text-center mt-2" active
          >Product</nuxt-link
        >
        <nuxt-link to="/" class="text-light text-center mt-2" active
          >Features</nuxt-link
        >
        <nuxt-link to="/" class="text-light text-center mt-2" active
          >Contact</nuxt-link
        >
      </b-navbar-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      openNav: true,
    };
  },
  methods: {
    handleOpenNav() {
      this.openNav = !this.openNav;
    },
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
}

.search-input:focus {
  outline: gold solid 1px;
}

.nav {
  width: 60%;
  background: rgb(71, 71, 71);
  height: 100vh;
  position: relative;
}

.openNav {
  position: absolute;
  right: 120%;
}

.nav-link {
  transition: 0.5s;
}

.nav-link:hover {
  color: gold !important;
}

.nav-parent {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #00000083;
}

.menu-icon:hover {
  color: gold !important;
}
</style>