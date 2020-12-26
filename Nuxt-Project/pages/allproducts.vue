<template>
  <div>
      <div class="container pt-5">
        <div class="row">
            <div class="col-sm-3">
                <Menu/>
            </div>

            <div class="col-sm-9">
                <AllProducts/>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SignIn from "../components/SignIn.vue";

export default {
  components: {
    Header,
    SignIn
  },
};
</script>

<style>

</style>