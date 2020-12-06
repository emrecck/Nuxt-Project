<template>
  <div class="products col-sm-12">
    <div class="row">
      <div
        class="col-sm-3 px-0 p-2"
        v-for="item in product"
        v-bind:key="item.id"
      >
        <div class="col-sm-12 p-3 border-layer">
          <div class="col-sm-12 px-0 urun">
            <div class="col-sm-12 p-0">
              <a href="#">
                <nuxt-link to="/product"
                  ><img
                    @click="addProductItem(item)"
                    class="urun-img"
                    v-bind:src="item.imgSource"
                /></nuxt-link>
              </a>
            </div>

            <div class="col-sm-12 pt-3 px-0">
              <h3 class="urun-isim text-left">{{ item.name }}</h3>
              <h5 class="urun-alt-isim text-left">{{ item.subName }}</h5>
            </div>

            <div class="fiyat-at-sepete clearfix">
              <div class="row">
                <div class="col-sm-6">
                  <h3 class="urun-fiyat text-left">{{ item.cost }} TL</h3>
                </div>

                <button @click="addItem(item)" class="col-sm-6 at-sepete-buton">
                  <!-- <a class="col-sm-6 at-sepete-buton"> -->
                  <img src="../assets/images/banner/at_sepete_sprite.png" />
                  <!-- </a> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import VueSimpleAlert from "vue-simple-alert";
// Vue.use(VueSimpleAlert);

import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Products",
  props: {},
  computed: {
    product() {
      return this.$store.state.product.productList;
    },
    image() {
      return this.$store.state.product.imageList;
    },
  },
  methods: {
    addItem(item) {
      // this.$alert("Ürününüz sepete eklendi.");
      this.$store.commit("cart/add", item);
    },
    addProduct(product) {
      this.$store.commit("product/addProduct", product);
    },
    addProductItem(productItem) {
      this.$store.commit("product/addProductItem", productItem);
    },
  },

  created() {
    axios
      .get("https://nuxt-js-79077-default-rtdb.firebaseio.com/list.json")
      .then((response) => {
        let data = response.data;
        let list = [];
        let temp = "";
        for (let key in data) {
          temp = {
            ...data[key],
            imgSource: this.image[key].imgSource,
            quantity: 1,
          };
          list.push(temp);
        }
        this.addProduct(list);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 100%;
  width: 100%;
}
.border-layer {
  border: 1px solid #dcdcdc;
  transition: border-color 0.3s ease-in 0.1s;
}
.border-layer:hover {
  border-color: #d53235;
}
.urun-img {
  transition: all 0.3s ease-in 0s;
}
.urun-img:hover {
  opacity: 0.8;
}
.urun-fiyat {
  font-size: 2.5rem;
  color: #d53235;
}
.at-sepete-buton {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
}
.at-sepete-buton img {
  height: 36px;
  width: 115px;
}

/* .at-sepete-button{
    cursor: pointer;
    margin-top: -55px;
    margin-left: 185px;
    float: right;
    border: 0px;
    background-color: transparent;
} */

.at-sepete-button img {
  /* height: 36px;
    width: 115px; */
}

.at-sepete-buton:active,
.at-sepete-buton:focus {
  border: 0px;
}

.yeni-lezzetlerimiz {
  height: 600px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.reklam-yeni-lezzetlerimiz {
  margin-top: 9px;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
}

.reklam-yeni-lezzetlerimiz img {
  margin-left: 7px;
  padding: 0px;
}

.ciftlikten-sectiklerimiz {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.urun-alt-isim {
  text-overflow: ellipsis;
  color: #737373;
  font-size: 1.35rem;
}
</style>
