<template>
  <div class="col-sm-12 banner px-0">
    <div class="top-banner col-sm-12">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 slogan">
            <p>
              Hasanbey Çiftliği'nden taze taze, doğal sebze, meyve, katkısız
              reçel, salça, turşu...
            </p>
          </div>

          <div class="col-sm-4 d-flex justify-content-center uye-islemleri">
            <nuxt-link to="/signup" class="kayit text-decoration-none">
              <i class="fas fa-angle-right text-danger icon"></i>
              Üye Olun</nuxt-link
            >
            <nuxt-link to="/signin" href="#" class="giris ml-5 text-decoration-none">
              <i class="fas fa-angle-right text-danger icon"></i>
              Üye Girişi</nuxt-link
            >
          </div>

          <div class="col-sm-2 sepet">
            <div class="dropdown">
              <button class="dropdown-buton" data-toggle="popover" type="button" data-container="body" data-placement="bottom" data-content="Vivamus">
                <img src="../assets/images/banner/red_basket_icon.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-banner pb-2 col-sm-12">
      <div class="container temp">
        <div class="col-sm-12 logo d-flex justify-content-center pt-5">
          <nuxt-link to="/home"
            ><img src="../assets/images/banner/logo.png"
          /></nuxt-link>
        </div>

        <div class="arama-bar">
          <div class="row">
            <div class="bar col px-0">
              <input type="text" placeholder="Yumurta, Domates, Süt..." />
            </div>
            <div class="buton col px-0">
              <button type="button">
                <img src="../assets/images/banner/red_magnifier_icon.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Header",
  props: {},
  components: {
    Navbar,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  display: block;
}

.top-banner {
  background: url(../assets/images/banner/page_top_bg.png);
  height: 35px;
}
.slogan p {
  color: inherit;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 40px;
}
.uye-islemleri {
  line-height: 40px;
}
.kayit {
  font-weight: bold;
  font-size: 1.4rem;
  color: rgb(23, 43, 123);
  opacity: 0.8;
}
.kayit:hover {
  opacity: 1;
  color: rgb(23, 43, 123);
}
.giris {
  font-weight: bold;
  font-size: 1.4rem;
  color: #d53235;
}
.giris:hover {
  opacity: 0.8;
  color: #d53235;
}
.icon {
  font-size: 1.2rem;
}
.dropdown-buton {
  cursor: pointer;
  background: transparent;
  border: 0px;
  padding: 5px 10px;
}

.dropdown-buton:hover {
  cursor: pointer;
  background: transparent;
  border: 0px;
}

.dropdown-buton img {
  width: 25px;
}
.bottom-banner {
  background: url(../assets/images/banner/nav_bg.png);
}
.temp {
  position: relative;
}
.arama-bar {
  position: absolute;
  right: -100px;
  top: 50px;
}
.bar input {
  width: 269px;
  height: 33px;
  border: 1px solid #eee;
  background: url(../assets/images/banner/search_input_bg.png);
  border-bottom: 1px solid #dcdcdc;
  color: #d53235;
  padding: 5px 8px;
}
.bar input[type="text"] ::placeholder {
  color: #d53235;
}
.buton button {
  border: 0px;
  background-color: white;
  width: 33px;
  height: 33px;
}
.buton img {
  max-width: 100%;
  width: 15px;
  height: 15px;
}
</style>
