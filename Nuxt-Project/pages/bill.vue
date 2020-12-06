<template>
  <div>
    <Header />
    <div class="fatura">
        <Bill />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Bill from "../components/Bill.vue";
export default {
  components: {
    Header,
    Bill
  },
};
</script>

<style>
.container {
  max-width: 1400px;
}

.fatura{
    margin-right: 650px;
    margin-top: 200px;
    margin-bottom: 200px;
}
</style>