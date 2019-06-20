export const videoConfig = {

  live: true,
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
  //techOrder: ['flash'], // 兼容顺序
  techOrder: ['flash', 'html5'],//设置顺序，
  flash: {hls: {withCredentials: false}, swf: SWF_URL},
  html5: {hls: {withCredentials: false}},
  sources: [{
    type: 'rtmp/flv',
    src: '' // 视频地址-改变它的值播放的视频会改变
  }],
  notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。

}


