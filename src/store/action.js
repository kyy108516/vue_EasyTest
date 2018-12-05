export default {
  addNum({commit,state},id){
    commit('RECORD_ANSWER',id)
    if (state.itemNum<state.itemDetail.length){
      commit('ADD_ITEMNUM')
    }
  }
}
