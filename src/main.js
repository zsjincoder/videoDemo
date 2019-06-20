// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VideoPlayer from 'vue-video-player'
import VueSocketio from 'vue-socket.io';
// Vue.use(VueSocketio, 'http://xxx.xxx.com:2018');
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(VideoPlayer)
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
