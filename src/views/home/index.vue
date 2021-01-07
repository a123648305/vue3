<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <van-image lazy-load :src="item" alt="img" fit="contain"/>
      </van-swipe-item>
    </van-swipe>
    <van-tabs v-model:active="active">
      <van-tab :title="item.name" v-for="item in musicType" :key="item.value">
        <song-list :songList="songData"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue';
import songList from '../../components/songList.vue'
import api from '../../http/request'
export default {
  components:{
    songList
  },
  setup(){
    const name=ref('wxs')
    const arr=ref([1,2,3,5,6])
    const active=ref(0)
    const musicType=[
      {
        name:'推荐音乐',
        value:1
      },
      {
        name:'热歌榜',
        value:2
      },      {
        name:'新歌榜',
        value:3
      }
    ]
    const songData=ref([])
    const songNum=ref(0)
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ]
    function change(index){
      console.log(index,'change')
    }
    async function getSongList(){
      try {
        const {result}=await api.getDefaultSong()
        songData.value=result.songs
        songNum.value=result.songCount
      } catch (error) {
        console.warn(error)
      }
    }
    return {change,images,active,musicType,songData,getSongList,songNum,name,arr}
  },
  mounted(){
    console.log('now fetch songList')
    this.getSongList()
  },
  methods:{
  }
};
</script>

<style lang="less">
.home{
  width: 375px;
  height: 400px;
  .my-swipe{
    height: 150px;
    border: 1px solid red;
  }
}
</style>