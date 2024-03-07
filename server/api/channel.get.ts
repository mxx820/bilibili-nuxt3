// Nuxt基于文件生成接口 会自动生成接口 /api/channel 请求方式为get
import channel from '@/database/channel';
export default defineEventHandler((event) => {
    return channel;
})