<template>
    <div class="player">
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions">
        </video-player>
    </div>
</template>

<script>
import {videoPlayer} from 'vue-video-player'

    export default {
        name:'videoVue',
        components: {
          videoPlayer
        },
        props:{
            sources:{
                type:Array,
                Default:[]
            }
        },
        data () {
            return {
                playerOptions: {
                    techOrder: ["flash"],
                    muted: true, // 默认静音
                    preload: "auto", // 视频预加载
                    autoplay: true,
                    controls: true,
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: this.sources,
                    notSupportedMessage: "此视频暂无法播放，请稍后再试",
                }
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        watch:{
            sources(val){
                this.playerOptions.sources = val;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    .player{
        .video-player{
            width: 100%;
            height: 100%;
        }
        .video-js{
            width: 100%;
            height: 100%;
        }
        video{
            object-fit: fill;
        }
    }
</style>
<style  lang="less" scoped>
.player{
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
