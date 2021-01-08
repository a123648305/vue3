<template>
  <div class="my">
      <div class="my-top">
          <van-image  src="https://img.yzcdn.cn/vant/cat.jpeg" round class="header-img"/>
          <div class="my-info">
              <p>hello</p>
              <p>萌新</p>
          </div>
      </div>
      <van-swipe class="my-main" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in imgs" :key="index">
                <van-image lazy-load :src="item" alt="img" fit="contain"/>
            </van-swipe-item>
      </van-swipe>
      <div class="my-menu">
          <div class="my-menu-item">
              <van-icon name="music-o" size="25"/>
              <span>我的音乐</span>
              <van-icon name="arrow" size="25" class="fr" color="#eee"/>
          </div>
          <div class="my-menu-item">
              <van-icon name="chat-o"  size="25"/>
              <span>我的音乐</span>
              <van-icon name="arrow" size="20" class="fr" color="#eee"/>
          </div>
         <div class="my-menu-item">
              <van-icon name="service-o"  size="25"/>
              <span>我的音乐</span>
              <van-icon name="arrow" size="20" class="fr" color="#eee"/>
          </div>
          <div class="my-menu-item">
              <van-icon name="music-o" size="25"/>
              <span>我的音乐</span>
              <van-icon name="arrow" size="20" class="fr" color="#eee"/>
          </div>
      </div>
  </div>
</template>

<script>
import { reactive} from 'vue'
export default {
    setup(){
        const imgs=reactive([
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg',
        ])
        return {imgs}
    }
}
</script>

<style lang="less" scoped>
.my{
    .my-top{
        height: 120px;
        background: url('../../assets/img/my_bk.png') no-repeat; 
        padding-top: 20px;
        padding-left: 20px;
        box-sizing: border-box;
        .header-img{
            width: 80px;
            height: 80px;
            float: left;
        }
        .my-info{
            float: left;
            padding-left: 20px;
            text-align: left;
            padding-top: 10px;
            p{
                font-size: 18px;
                font-weight: 500;
                line-height: 0;
                &:last-child{
                    font-size: 16px;
                    color: #eee;
                    padding-top: 10px;
                }
            }
        }
    }
    .my-main{
        height: 100px;
    }
    .my-menu{
        .my-menu-item{
            display: flex;
            align-items: center;
            padding: 10px 20px;
            border-bottom: 1px solid #eee;
            span{
                font-size: 16px;
                color: #333;
                font-weight: 500;
                padding-left: 10px;
            }
        }
    }
    .fr{
        margin-left: auto;
    }
}
</style>