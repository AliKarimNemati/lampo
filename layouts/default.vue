<template>
<div>
  <Navbar class="position-fixed-top"/>
  <Nuxt />
  <Footer />
</div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  computed:{
    ...mapMutations(["setCart"])
  },
  beforeMount(){
    this.setCart;
  }
}
</script>
