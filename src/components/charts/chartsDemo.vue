<template>
  <div id="myChart" style="width: 800px; height: 350px;margin: 0  auto"></div>
</template>

<script>
  let date=[];
  let data=[];
  let index =0;
  export default {
    name: "chartsDemo",
    props: {start: Number},
    data(){
      return{

        timer:null
      }
    },
    mounted() {
      this.drawLine();
      this.testS()
    },
    watch:{
      start(val,oldVal){
        //console.log(val);
        //this.drawLine()
      }
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;

        let options = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          title: {
            left: 'center',
            text: '大数据量面积图',
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
            type: 'inside',
            start:0,
            end: 100
          }, {
            start: 0,
            end: 1200,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
            {
              name: '模拟数据',
              type: 'line',
              smooth: true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 0,
                  color: 'rgb(255, 70, 131)'
                }])
              },
              data: data
            }
          ]
        };
        myChart.setOption(options);
      },
      testS(){
        this.timer = setInterval(()=>{
          index ++;
          if(data.length > 20){
              data.shift()
              date.shift()
          }
          date.push(parseInt(((index - 1) / 60)) + '分' + ((index) % 60) + "秒");
          data.push(Math.round(((Math.random() - 0.5) * 20)/(Math.random() - 0.5) * 10)*Math.random()-3);
          console.log(data.length);
          console.log(data[data.length-1]);

          this.drawLine()
          if(index == 500){
              this.clearTimer();
          }
        }, 1000);
      },
      clearTimer(){
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
</script>

<style scoped>

</style>
