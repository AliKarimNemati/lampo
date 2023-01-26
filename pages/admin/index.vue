<template>
  <div class="p-md-5 p-4 mt-5">
    <h2 class="text-center">Admin</h2>
    <div class="text-center mt-5">
      <!-- add product -->
      <nuxt-link
        to="/admin/manage-product"
        class="admin-btn text-decoration-none text-light btn p-1 mr-3"
      >
        manage Product
      </nuxt-link>

      <!-- manage category -->
      <nuxt-link
        to="/admin/manage-category"
        class="admin-btn text-decoration-none text-light btn p-1"
      >
        manage category
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
};
</script>

<style>
body {
  background: #181818;
  color: #eee;
}

.admin-btn {
  background: #ff5c01;
}
</style>