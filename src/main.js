import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/request'
// import './mock'

import 'lib-flexible/flexible.js' 
import { Button, Tabbar, TabbarItem,Swipe, SwipeItem,Image as VanImage ,Lazyload ,Tab, Tabs ,Icon ,Tag ,Popover } from 'vant'
const app=createApp(App)
app.config.globalProperties.$api=api

// app.directive('povper',(el,binding,vnode)=>{
//     //这将被作为 `mounted` 和 `updated` 调用
//     console.log(el,'el')
//     console.log(binding,'binding')
//     console.log(vnode,'vnode')
// })


app.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(SwipeItem)
.use(Swipe)
.use(VanImage)
.use(Lazyload)
.use(Tab)
.use(Tabs)
.use(Icon)
.use(Tag)
.use(Popover)
app.use(store).use(router).mount('#app')

