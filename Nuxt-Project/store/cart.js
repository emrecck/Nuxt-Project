export const state = () => ({
<<<<<<< HEAD
    itemList : []
    
=======
    itemList : [],
>>>>>>> 528510e72d96ee27a9b3a3cf369e73177ba6d27a
  })

  export const mutations = {

    add(state, item){
      if( !state.itemList.find(i =>i.id ===item.id))
      {
        state.itemList.push(item)
      }else{

      }
    },
    remove(state, index){
      state.itemList.splice(index, 1)
    },
    incCounter(state,index){
      state.itemList[index].quantity+=1
    },
    decCounter(state,index){
      state.itemList[index].quantity-=1
    }
  }