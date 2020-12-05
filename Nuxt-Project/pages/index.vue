<template>
  <div>
    <Header />
    <div class="container">
      <Slider />
      <Products />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import Products from "../components/Products.vue";
export default {
  components: {
    Header,
    Slider,
    Products,
  },
};
</script>

<style>
.container {
  max-width: 1400px;
}
</style>