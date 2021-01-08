import request from './index'

export default {
    test:(url)=>request.get(url),
    getDefaultSong:()=>request.get('/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA'),
    fetchLrc:()=>request.get('/lyric?id=33894312'),
    fetchTvList:()=>request.get('/dj/program?rid=336355127')

}