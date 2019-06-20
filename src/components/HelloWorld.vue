<template>
  <div style="text-align: center">
    <h2>视屏列表</h2>
    <div v-for="(item,index) in video" style="display: inline-block;margin: 10px;background-color: darkseagreen"
         :key="index">
      <p>{{item.name}}</p>
      <!--<video width="320" height="240" controls :src="i.url" :key="k"></video>-->
      <div>
        <!--<player class="video-player-box" ref="videoPlayer" :videoUrl="item.url"></player>-->
        <video-player :url="item.url" :playId = 'item.name+index'  @currentTime="currentTime"></video-player>
      </div>
    </div>
    <charts-demo :start="runTime"></charts-demo>
  </div>
</template>

<script>
  import url from "@/assets/video/demo.mp4";
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'
  // import 'videojs-contrib-hls/dist/videojs-contrib-hls'
  import player from './video/player.vue'
  import videoPlayer from './video/video-player.vue'
  import chartsDemo from './charts/chartsDemo.vue'

  export default {
    name: 'HelloWorld',
    components: {
      player, videoPlayer,chartsDemo
    },
    data() {
      return {
        runTime:0,
        video: [
          {
            name: 'player1',
            url: url
          },
          // {
          //   name: 'player2',
          //   url: 'http://vjs.zencdn.net/v/oceans.mp4'
          // },
        ]
      }
    },
    sockets:{
      connect: function(){
        this.id=this.$socket.id
      },
      //这里的new_msg是后台提供的方法，如：后台提供的方法为mysocket,则这里的方法名就是mysocket,
      new_msg: function(msg){
        console.log(msg);//msg就是获取的数据
      }
    },
    mounted() {
      //this.$socket.emit('connect', 123); //在这里触发connect事件
    },
    computed: {},
    methods: {
      currentTime(event){
        this.runTime = event;
        //console.log(event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
  .video-js .vjs-big-play-button {
    /*
     播放按钮换成圆形
    */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
</style>
