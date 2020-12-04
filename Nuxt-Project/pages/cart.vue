<template>
  <div>
    <Header />
    <Cart />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Cart from "../components/Cart.vue";
export default {
  components: {
    Header,
    Cart
  },

};
</script>

<style>
.container {
  max-width: 1400px;
}
</style>