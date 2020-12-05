export const state = () => ({
    itemList : []
  })

  export const mutations = {

    add(state, item){
      state.itemList.push(item)
    },

    remove(state, index){
      state.itemList.splice(state.itemList[index], 1)
    }
  }