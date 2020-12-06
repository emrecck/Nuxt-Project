<template>
  <div class="col-sm-12 banner px-0">
    <div class="col-sm-12 my-2">
      <nav>
        <div class="container">
          <ul class="nav d-flex justify-content-around col-sm-12 ">
            <li class="nav-items">
              <nuxt-link to="/"><div class="anasayfa"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="ciftlik"></div></a>
            </li>
            <li class="nav-items mt-2">
              <nuxt-link to="/allproducts"><div class="tum-urunler"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="domates-biber"></div></a>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="sut-peynir"></div></a>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="yumurta-sucuk"></div></a>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="salca-tursu"></div></a>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="zeytin-zeytinyagi"></div></a>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="recel-bal"></div></a>
            </li>
            <li class="nav-items mt-2">
              <a class="" href="#"><div class="ekmek"></div></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <!-- background-color: #E64452; -->
<style scoped>
.container{
  max-width: 1140px;
}

.bottom-banner {
  background: url(../assets/images/banner/nav_bg.png);
}
.anasayfa {
  background: url(../assets/images/banner/kategori/anasayfa.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  height: 50px;
  width: 65px;
}

.ciftlik {
  background: url(../assets/images/banner/kategori/ciftlik.png) no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 45px;
}

.tum-urunler {
  background: url(../assets/images/banner/kategori/tum-urunler.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.domates-biber {
  background: url(../assets/images/banner/kategori/sebze-meyve.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.sut-peynir {
  background: url(../assets/images/banner/kategori/sut-peynir.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 70px;
}

.yumurta-sucuk {
  background: url(../assets/images/banner/kategori/yumurta.png) no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.salca-tursu {
  background: url(../assets/images/banner/kategori/salca-tursu.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 90px;
}

.zeytin-zeytinyagi {
  background: url(../assets/images/banner/kategori/zeytin-zeytinyagi.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 120px;
}

.recel-bal {
  background: url(../assets/images/banner/kategori/recel-bal.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.ekmek {
  background: url(../assets/images/banner/kategori/ekmek.png) no-repeat
  center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 50px;
}

.anasayfa:hover {
  background: url(../assets/images/banner/kategori/black/anasayfa.png) no-repeat
    center;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 65px;
}

.ciftlik:hover {
  background: url(../assets/images/banner/kategori/black/ciftlik.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  height: 50px;
  width: 45px;
  max-width: 100%;
}

.tum-urunler:hover {
  background: url(../assets/images/banner/kategori/black/tum-urunler.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.domates-biber:hover {
  background: url(../assets/images/banner/kategori/black/sebze-meyve.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.sut-peynir:hover {
  background: url(../assets/images/banner/kategori/black/sut-peynir.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 70px;
}

.yumurta-sucuk:hover {
  background: url(../assets/images/banner/kategori/black/yumurta-sucuk.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.salca-tursu:hover {
  background: url(../assets/images/banner/kategori/black/salca-tursu.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 90px;
}

.zeytin-zeytinyagi:hover {
  background: url(../assets/images/banner/kategori/black/zeytin-zeytinyagi.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 120px;
}

.recel-bal:hover {
  background: url(../assets/images/banner/kategori/black/recel-bal.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.ekmek:hover {
  background: url(../assets/images/banner/kategori/black/ekmek.png) no-repeat
  center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 50px;
}
</style>
