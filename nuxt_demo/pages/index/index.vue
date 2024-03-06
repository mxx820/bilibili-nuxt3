<script setup lang="ts">
import type { VideoItem } from '~/types/video';

// 获取频道列表
// const res = await useFetch('/api/channel');
// console.log(res.data);
const {data: channelList} = await useFetch('/api/channel');
// 获取热门视频列表数据
const {data: hotList} = await useFetch('/api/hot');

// 视频列表 - 分页
// 显示列表
const list = ref<VideoItem[]>([]);
// 加载状态
const loading = ref(false);
// 是否加载完成
const finished = ref(false);

// 页码和页容量
let page = 1;
let pageSize = 10;

// 滚动触底触发
const onLoad = async () => {
  // 加载状态开始
  loading.value = true;
  // 根据当前页码获取数据
  const data = hotList.value?.slice((page -1) * pageSize, page * pageSize) as VideoItem[];
  // 追加到用于渲染的数组
  list.value.push(...data);

  // 页码累加
  page++;

  // 加载状态结束
  loading.value = false;
  // 数据全部加载结束 -- 加载结束
  if(list.value.length === hotList.value?.length){
    finished.value = true;
  }
};
// 初始化加载 - 主动请求前 20 条数据，用于服务端首屏渲染，方便 SEO 抓取到数据
onLoad();
</script>

<template>
  <!-- Sticky 粘性布局 -->
  <van-sticky class="sticky">
    <!-- 公共头部 -->
    <AppHeader/>
    <!-- 频道模块 -->
    <van-tabs>
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>
  </van-sticky>
  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
  <div class="video-list">
      <AppVideo v-for="item in list" :key="item.aid" :item="item"/>
    </div>
  </van-list>
</template>

<style lang="scss" scoped>
.sticky {
  background-color: #fff;
}
/* 视频列表 */
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>