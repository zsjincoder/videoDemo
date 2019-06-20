<template>
  <div class="player" style="width:400px; display: inline-block">
    <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  customEventName="customstatechangedeventname"
                  @play="onPlayerPlay($event)"
                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied">
      <!--   @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
     -->
    </video-player>
  </div>
</template>

<script>
  // import SWF_URL from 'videojs-swf/dist/video-js.swf'
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'

  import 'videojs-contrib-hls'
  import 'videojs-flash'

  //引入hls.js
  //import 'videojs-contrib-hls/src/videojs-contrib-hls.js'
  import {videoPlayer} from 'vue-video-player'

  export default {
    name: "player",
    props: {videoUrl: String}, //获取父组件的参数
    components: {
      videoPlayer
    },
    computed:{
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    watch: {
      videoUrl(val, oldVal) {
        this.playerOptions.sources[0].src = val;
      }
    },
    player() {
      return this.$refs.videoPlayer.player
    },
    data() {
      return {
        playerOptions: {
          live: true,
          width:360,
          height:260,
          autoplay: true, // 如果true，浏览器准备好时开始播放
          muted: false, // 默认情况下将会消除任何音频
          loop: false, // 是否视频一结束就重新开始
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          language: 'zh-CN',
          poster: 'https://file.digitaling.com/eImg/uimages/20150907/1441607120885946.gif',// 你的封面地址
          controlBar: {
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            currentTimeDisplay: false, // 当前时间
            volumeControl: false, // 声音控制键
            playToggle: false, // 暂停和播放键
            progressControl: true, // 进度条
            fullscreenToggle: true // 全屏按钮
          },
          techOrder: ['html5'], // 兼容顺序
          // techOrder: ['flash'], // 兼容顺序
          // techOrder: ['flash', 'html5'],//设置顺序，
          flash: {hls: {withCredentials: false}}, //swf: SWF_URL
          html5: {hls: {withCredentials: false}},
          sources: [{
            type: 'video/mp4',
            // type: "video/ogg",
            // type:"video/webm",
            // type:"application/x-mpegURL",
            src: '' // 视频地址-改变它的值播放的视频会改变
          }],
          notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。

        }
      }
    },
    mounted(){
      this.playerOptions.sources[0].src = this.videoUrl;
      // console.log(this.videoUrl)
      // console.log(this.playerOptions.sources[0].src)
    },
    methods:{
      // listen event就绪
      onPlayerPlay(player) {
        //this.$refs.videoPlayer.play()
        console.log('player play!', player)
      },
      //暂停
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>

<style scoped>

</style>
