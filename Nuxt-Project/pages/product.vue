<template>
  <div>
    <Product />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Product from "../components/Product.vue";
export default {
  components: {
    Header,
    Product
  }
};
</script>

<style>
.container {
  max-width: 1400px;
}
</style>