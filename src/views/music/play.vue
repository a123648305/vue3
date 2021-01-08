<template>
  <div class="play">
      <div class="play-top">
          <div class="cricle" :class="{'cricle-pause':isPlay}">
              <van-image :src="playImg" alt="playImg" round/>
          </div>
          <van-icon name="play-circle" class="play-icon" size="60" color="rgba(0,0,0,0.7)" @click="paly" />
      </div>
      <div class="play-lrc">
          <h2>{{lrc.title}}</h2>
          <div class="lrc-content">
               <p v-for="(item,index) in  lrc.content" :key="index">{{item}}</p>
          </div>
      </div>
      <div class="play-bottom"></div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import api from '../../http/request'
export default {
   setup(){
       const playImg=ref('http://p2.music.126.net/8QzpdlbHdEaSGoLVVQeN0Q==/109951165604116364.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0')
       const lrc=reactive({})
       const isPlay=ref(false)
       
       const paly=function(){
           isPlay.value=!isPlay.value
       } 
       const getLrc=()=>{
           api.fetchLrc().then(res=>{
               console.log(res)
           })
       }
       onMounted(getLrc)


       return {playImg,lrc,isPlay,paly}
   }
}
</script>

<style lang="less" scoped>
.play{
    background-color:rgba(0,0,0,0.7);
    // filter: blur(0px);
    .play-top{
        height: 300px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
        &::before{
            content: '';
            width: 100px;
            height: 100px;
            position: absolute;
            top: 0px;
            left: 45%;
            z-index: 100;
            background: url('../../assets/img/point.png') no-repeat;
            background-size: auto 100%;
        }
        .cricle{
            border-radius: 50%;
            width: 200px;
            height: 200px;
            border:30px solid slateblue;
            animation: circling 20s linear infinite;

        }
        .cricle-pause{
            animation-play-state:paused
        }
        .play-icon{
            position: absolute;
        }
    }
    @keyframes circling {
        from{transform:rotate(0turn);}
        to{transform:rotate(1turn);}   
    }
    .play-lrc{

    }
    .play-bottom{

    }
}

</style>