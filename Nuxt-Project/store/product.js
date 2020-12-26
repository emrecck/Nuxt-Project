export const state = () => ({
    productList : [],
    imageList:[
        {
            id: 0,
            imgSource: require("../assets/images/ürünler/0001030_dogal-koy-yumurtasi-60-adet_500.png"),
          },
          {
            id: 1,
            imgSource: require("../assets/images/ürünler/0001227_dolgulu-yesil-zeytin-sarimsakli-kekikli-500-gr_500.jpeg"),
          },
          {
            id: 2,
            imgSource: require("../assets/images/ürünler/0001225_gurme-paketi_500.jpeg"),
          },
          {
            id: 3,
            imgSource: require("../assets/images/ürünler/0000981_dolmalik-biber_500.png"),
          },
          {
            id: 4,
            imgSource: require("../assets/images/ürünler/0001081_dogal-ev-yapimi-pekmez-armut-450-gr_500.png"),
          },
          {
            id: 5,
            imgSource: require("../assets/images/ürünler/0001161_patlican_500.png"),
          },
          {
            id: 6,
            imgSource: require("../assets/images/ürünler/0001103_dogal-domates-suyu-1365-gr_500.png"),
          },
          {
            id: 7,
            imgSource: require("../assets/images/ürünler/0001236_yayik-tereyagi-500-gr_500.jpeg"),
          },
          {
            id: 8,
            imgSource: require("../assets/images/ürünler/0001236_yayik-tereyagi-500-gr_500.jpeg"),
          }
    ],
    productItem:'',
    filteredList : []
  })

  export const mutations = {
      addProduct(state,product){
        state.productList = product;
      },
      addProductItem(state,productItem){
        state.productItem = productItem;
      },
      setQuantity(state,value){
        state.productItem.quantity = value;
      },
      incQuantity(state){
        state.productItem.quantity+=1
      },
      decQuantity(state){
        state.productItem.quantity-=1
      },
      filter(state,search){
        state.filteredList = state.productList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
        )
      }
  }