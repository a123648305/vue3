export default{
  namespace:true,
  state: {
    test:'vue3'
  },
  getters: {
    test:state=>state.test
  },
  mutations: {
    test:(state,data)=>{
      state.test=data
    }
  },
  actions: {}
}