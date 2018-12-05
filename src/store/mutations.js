const ADD_ITEMNUM='ADD_ITEMNUM'
const RECORD_ANSWER='RECORD_ANSWER'

export default{
  [ADD_ITEMNUM](state){
    state.itemNum++
  },
  [RECORD_ANSWER](state,id){
    state.answerid.push(id)
  }
}
