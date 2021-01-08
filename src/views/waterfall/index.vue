<template>
  <div  class="item-box" v-for="item in tvList" :key="item" >
      <!-- :style="{height: Math.random()*200+'px'}" -->
      <img :src="item.dj.coverUrl" alt="coverUrl" class="item-img"/>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import api from '../../http/request'
export default {
    setup(){
        const tvList=ref([])
        const laytop=(rowNum)=>{
            const Nodes=document.querySelectorAll('.item-box')
            console.log(Nodes,'all')
            let arr=[]
            Nodes.forEach((item,index)=>{
                if(index<rowNum){
                    arr.push(item.offsetHeight)
                }else{
                    let min=Math.min.apply(null,arr)
                    let findex=arr.findIndex(x=>x===min)
                    item.style.top=`${min+5}px`
                    item.style.position='absolute'
                    item.style.left=`${Nodes[findex].offsetLeft-5}px`
                    arr[findex]=min+item.offsetHeight+5
                    console.log(arr)
                }
            })
       }
       const getTvList=()=>{
           api.fetchTvList().then(res=>{
               tvList.value=res.programs
           })
       }
       onMounted(() => {
        console.log('mounted!')
        getTvList()
        laytop(3)
       })
       return {tvList,getTvList,laytop}
    },
    mounted(){
        // this.laytop(3)
    }
}
</script>

<style lang="less" scoped>
.item-box{
    border: 1px solid red;
    width: 30%;
    // height: 200px;
    font-size: 20px;
    margin: 10px 5px;
    float: left;
    .item-img{
        width: 100%;
        height: 100%;
        height: auto;
    }
}
</style>