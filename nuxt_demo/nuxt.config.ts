// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开启 ssr 服务端渲染 默认是开启的
  ssr: true,
  // 调试工具
  devtools: { enabled: true },
  // 应用模块
  modules: ['@vant/nuxt', '@vueuse/nuxt'],
  // 移动端 vw 适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        // 设计稿的视口宽度
        viewportWidth: 375,
      }
    }
  }
})
