<template>
    <van-tabbar v-model="active" @change="$emit('selectTab',active)">
        <van-tabbar-item badge="3">
            <span>首页</span>
            <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const active = ref(0);
        const icon = {
            active: 'https://img.yzcdn.cn/vant/user-active.png',
            inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        };
        return {
            icon,
            active
        };
  },
}
</script>

<style>

</style>