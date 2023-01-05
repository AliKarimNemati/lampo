<template>
  <div class="p-md-5 p-4 mt-5 text-center">
    <div v-if="error.statusCode === 404">
      <h1 class="text404">404</h1>
      <h1>Page not found</h1>
      <p class="text-secondary">
        It looks like that page doesn't exist - please check the URL and try
        again
      </p>
    </div>
    <div v-else-if="error.statusCode === 500">
      <h1 class="text404">500</h1>
      <h1>Internal Server error</h1>
    </div>
    <h1 v-else>An error occurred</h1>
    <div class="mt-5">
      <NuxtLink
        class="home-btn text-light text-decoration-none px-3 py-2"
        to="/"
        >Home page</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style scoped>
.home-btn {
  background: #ff5c01;
  border-radius: 8px;
}

.text404 {
  font-size: 200px;
  font-weight: 200;
  color: #ff5c01;
}
</style>