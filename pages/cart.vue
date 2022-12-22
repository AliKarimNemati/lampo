<template>
  <div>
    <h1 class="text-center mt-5 pt-5 header-feature">Cart</h1>
    <CartTable />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Cart',
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
  background: #181818;
  color: white;
}
</style>