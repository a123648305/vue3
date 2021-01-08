export default{
    namespaced:true,
    state: {
        msg:'common'
      },
      getters: {
        msg:state=>state.msg
      },
      mutations: {
        msg:(state,data)=>{
          state.msg=data
        }
      },
    actions: {}
}