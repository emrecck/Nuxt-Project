<template>
    <div class="tum-urunler-main col-sm-12 px-0">
        <div class="col-sm-12">
          <ul class="side_category_menu col-sm-12">
            <li v-for="item in list" v-bind:key="item.id"><a href="#">{{ item.name }}</a></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  data() {
    return{
      list:[
        {
          id:0,
          name:"Aile Boyu"
        },
        {
          id:1,
          name:"Tüm Ürünler"
        },
        {
          id:2,
          name:"Sebze & Meyve"
        },
        {
          id:3,
          name:"Süt & Peynir"
        },
        {
          id:4,
          name:"Yumurta & Sucuk"
        },
        {
          id:5,
          name:"Salça & Turşu"
        },
        {
          id:6,
          name:"Zeytin & Zeytinyağı"
        },
        {
          id:7,
          name:"Reçel & Bal"
        },
        {
          id:8,
          name:"Sebzeler"
        },
        {
          id:9,
          name:"Ekmek"
        },
        
        {
          id:10,
          name:"Meyveler"
        },
        {
          id:11,
          name:"Hediye Paketleri"
        },
        {
          id:12,
          name:"Paketler"
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side_category_menu {
  padding: 70px 20px 20px 20px;
  background: url(../assets/images/tum-urunler/side_pattern.png);
  position: relative;
  height: 735px;
  text-align: left;
}

.side_category_menu li {
  margin-bottom: 0;
  list-style-type: none;
}

.side_category_menu:before {
  background: url(../assets/images/tum-urunler/urunlerimiz_tabela.png) no-repeat;
  content: "";
  display: block;
  width: 500px;
  height: 66px;
  position: absolute;
  left: 5px;
  top: -8px;
}

.side_category_menu li:after {
  content: "";
  width: 240px;
  height: 3px;
  background: url(../assets/images/tum-urunler/side_item_border.png) no-repeat;
  display: block;
  margin: 4px 0;
}

.side_category_menu li a {
  color: #b67646;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 6px 0;
  font-size: 19px;
}

.side_category_menu li a:hover {
  color: #738638;
}

</style>
