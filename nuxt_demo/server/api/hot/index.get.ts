// 请求接口 /api/video默认是index 请求方式get
import video from '@/database/video';

export default defineEventHandler((event)=>{
    // 返回所有视频
    return video;
})