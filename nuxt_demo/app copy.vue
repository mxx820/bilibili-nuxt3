<template>
  <div>
    <!-- 路由链接 -->
    <!-- 相当于 RouterLink -->
    <!-- 基于文件的路由系统 路由的path就是现在的文件路径 -->
    <!-- / 自动匹配到 /index/index.vue 前提是pages目录下没有index.vue-->
    <NuxtLink to="/">首页</NuxtLink>
    <!-- /video/index.vue  自动匹配的是video文件下的index.vue 因此可以省略/index.vue-->
    <NuxtLink to="/video">视频页</NuxtLink>

    <!-- 页面路由 -->
    <!-- 相当于 RouterView 路由出口 -->
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
// 基础样式
import './assets/styles/base.scss'; 
// 字体图标
import './assets/styles/iconfont.scss';
// SEO优化
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description: 'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  // 搜索关键字 keywords 废除
  keywords:'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影'
  
})
</script>

<style lang="scss">
/* vant-ui 主题定制 */
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
