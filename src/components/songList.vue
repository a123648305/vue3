<template>
    <ul class="songList">
        <li v-for="(item,index) in songList" :key="index">    
            <div class="song-info">
                <p class="song-name">{{item.name}}</p>
                <p class="song-singer">
                    <van-tag type="primary" size="medium">标签</van-tag>
                    歌手：{{showSinger(item.artists)}}
                </p>
            </div>
            <div class="song-opeator">
                <van-icon name="play-circle-o" size="25" color="#666"/>
                <van-icon name="more-o" size="25" color="#666" class="more"  v-povper/>
            </div>   
        </li>
        <transition name="fade" mode="out-in" >
            <div class="poper-more" :style="{top:popoverTop}" v-show="showPopover">
                <ul>
                    <li v-for="(item,index) in actions" :key="index">{{item.text}}</li>
                </ul>
            </div>
        </transition>
    </ul>
</template>

<script>
import {ref} from 'vue'
export default {
    props:{
        songList:{
            type:Array,
            default:()=>[],
            require:true
        }
    },
    directives:{
        povper:(el,bindling)=>{
            let context=bindling.instance
            el.onclick =function(){
                context.popoverTop=(el.offsetTop+40)+'px'
                context.showPopover=!context.showPopover
            }
        }
    },
    setup() {
        const showPopover = ref(false);
        const popoverTop=ref(0)
        const popverElement=ref('')
        // 通过 actions 属性来定义菜单选项
        const actions = [
        { text: '选项一' },
        { text: '选项二' },
        { text: '选项三' },
        ];

        const onSelect = (action) => {
        console.warn(action)
        };

        return {
            actions,
            onSelect,
            showPopover,
            popverElement,
            popoverTop
        };
    },
    mounted(){},
    methods:{
        showSinger(artists){
          artists.length>0?[]:[]
          let str=''
          artists.map(item=>{
              str+=item.name+'/'
          })
          
            return str.replace(/\/$/,'')
        }
    }
}
</script>

<style lang="less" scoped>
.songList{
    border-block-color: #999;
    li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        &:last-child{
            border-bottom: none;
        }
    }
    .song-info{
        overflow: hidden;
        text-align: left;
        padding-left: 20px;
        flex: 1;
        .song-name{
            font-size: 16px;
            font-weight: 500;
            line-height: 0;
        }
    }
    .song-opeator{
        width: 100px;
        .more{
            margin-left: 10px;
        }
    }
    .poper-more{
        width: 80px;
        position: absolute;
        // top: 85px;
        // left: 186px;
        right: 10px;
        padding:10px 10px;
        border-radius: 8px;
        background-color:  #4a4a4a;
        box-shadow: 0 2px 12px rgba(50, 50, 51, 0.12);

        &::before{
            content: '';
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom: 10px solid #4a4a4a;;
            position: absolute;
            top: -20px;
            left: 65px;
        }

        li{
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            color: #fff;
            display: block;
            border-bottom: 1px solid #ebedf0;
            line-height: 30px;
            &:last-child{
                border-bottom: none;
            }
            &:hover{
               background-color: rgba(0, 0, 0, 0.2);
            }
        }
    }
    .test{
        position: absolute;
        top: 100px;
        left: 100px;
    }
}
</style>