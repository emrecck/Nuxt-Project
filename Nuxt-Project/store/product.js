export const state = () => ({
    itemList : []
  })

  export const mutations = {

    add(state, item){
      state.itemList.push(item)
    },

    remove(state, {item}){
      state.itemList.splice(state.itemList.indexOf(item), 1)
    }
  }