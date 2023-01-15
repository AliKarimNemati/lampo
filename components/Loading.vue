<template>
  <div v-if="loading" class="loading-page d-flex align-items-center justify-content-center">
    <b-spinner
      style="width: 3rem; height: 3rem"
      
      label="Large Spinner"
      variant="light"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style>
.loading-page {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.919);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
}

</style>