export const state = () => ({
    itemList : [
      // {
      //   id:0,
      //   imgSource: require('../assets/images/ürünler/0000981_dolmalik-biber_500.png'),
      //   name: "Dolmalık Biber",
      //   subName: "60 Adet Doğal Köy Yumurtası",
      //   cost: "34,90"

      // },
      // {
      //   id:1,
      //   imgSource: require('../assets/images/ürünler/0000981_dolmalik-biber_500.png'),
      //   name: "Biber",
      //   subName: "60 Adet Doğal Köy Yumurtası",
      //   cost: "34,90"

      // }
    ]
  })

  export const mutations = {

    add(state, item){
      state.itemList.push(item)
    },

    remove(state, {item}){
      state.itemList.splice(state.itemList.indexOf(item), 1)
    }
  }