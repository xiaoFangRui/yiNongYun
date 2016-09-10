
 logo.controller("vote",function($scope){

     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('logoVoteChart'));
     var option = {          // 指定图表的配置项和数据
         xAxis: {
             axisLine:{
                 show:true,
                 lineStyle:{
                     color:"#000",
                     width:1,
                     type:"none"
                 }
             },    //坐标轴线，
             axisTick:false,        //坐标轴小标记，
             data: ["亲子","采摘","种地","烧烤","垂钓","亲子"]
         },
         yAxis: {
             splitLine:false   //区域内分隔线，
             //axisLine:false
         },
         tooltip : {
             trigger: 'axis'
         },
         series: [{
             type: 'bar',       //图标类型
             barGap:'30px',     //柱宽
             barCategoryGap :"30px",
             data: [158, 258, 1058, 168, 148, 260],
             itemStyle: {
                 normal: {
                     color: function (params) {
                         // build a color map as your need.
                         var colorList = [
                             '#fff600', '#ffbf1b', '#00eaff', '#fe8d00', '#5ebdff', '#6aea0c'
                         ];
                         return colorList[params.dataIndex]
                     },
                     label: {
                         show: true,
                         position: 'top',
                         formatter: '{c}',
                         textStyle:{
                             color:"#333"
                         }
                     }
                 }
             }

         }]
     };

     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
});


