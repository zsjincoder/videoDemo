<template>
  <div>
    <video :id="playId"
           class="video-js
                vjs-default-skin
                vjs-big-play-centered"

           data-setup='{ "html5" : { "nativeTextTracks" : false }}'>
    </video>
  </div>
</template>

<script>
  import url from "@/assets/video/demo.mp4";

  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'
  import 'videojs-flash'
  import SWF_URL from 'videojs-swf/dist/video-js.swf'


  videojs.options.flash.swf = SWF_URL;// 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件
  export default {
    name: "video-player",
    props:{url:String ,playId:String},
    data() {
      return {
        VideoOptions: {
          autoplay: true, // 是否自动播放
          muted: false, // 是否静音
          controls: true,
          fluid: false, // 宽高自适应
          techOrder: ["flash","html5"],
          sources: [{
            src: '',
            type: 'video/mp4'
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            currentTimeDisplay: true, // 当前时间
            volumeControl: false, // 声音控制键
            playToggle: false, // 暂停和播放键
            progressControl: true, // 进度条
            fullscreenToggle: true // 全屏按钮
          },
          preload: "auto",
          width: "600",
          height: "340"
        },
      }
    },
    mounted() {
      this.VideoOptions.sources[0].src = this.url;
      console.log(this.url);
      let vm = this;
      this.player1 = videojs(this.playId, this.VideoOptions, function onPlayerReady() {
        videojs.log('播放器已经准备好了!');
        this.on('play', function (e) {
          console.log('开始/恢复播放')
        })
        this.on('pause', function () {
          console.log('暂停播放')
        })
        this.on('ended', function () {
          console.log('结束播放')
        })
        this.on('timeupdate', (e)=> {
          vm.$emit("currentTime",this.currentTime())
        })
      })
      setTimeout(() => {
        this.player1.player()
      }, 1000)
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
