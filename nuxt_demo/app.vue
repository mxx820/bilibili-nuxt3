<script setup lang="ts">
// 使用静态导入以实现服务器端兼容性
// 基础样式
import './assets/styles/base.scss'; 
// 字体图标
import './assets/styles/iconfont.scss';

// 注意：动态导入不兼容服务器端
import('~/assets/styles/base.scss')

// SEO优化
// 设置网站 SEO信息
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description: 'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  // 搜索关键字 keywords 废除
  keywords:'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
  author: '哔哩哔哩',
  // 绕开 B 站的防盗链
  referrer: 'no-referrer',
  
})
</script>

<template>
  <div>
    <!-- 路由链接 -->
    <!-- 相当于 RouterLink -->
    <!-- 基于文件的路由系统 路由的path就是现在的文件路径 -->
    <!-- / 自动匹配到 /index/index.vue 前提是pages目录下没有index.vue-->
    <!-- <NuxtLink to="/">首页</NuxtLink> -->
    <!-- /video/index.vue  自动匹配的是video文件下的index.vue 因此可以省略/index.vue-->
    <!-- <NuxtLink to="/video">视频页</NuxtLink> -->

    <!-- Nuxt 页面容器，相当于 Vue 的 RouterView 路由出口 -->
    <!-- keepalive 缓存打开过的页面 缓存所有可能会卡 缓存 10 级页面 提升用户切换体验-->
    <NuxtPage :keepalive="{max: 10}"/>
    <!-- 返回顶部 默认单位px -->
    <van-back-top :right="10"/>
  </div>
</template>

<style lang="scss">
// 基础样式
@import './assets/styles/base.scss'; 
// 字体图标
@import './assets/styles/iconfont.scss';
/* vant-ui 主题定制 */
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}</style>
