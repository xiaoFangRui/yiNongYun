window.onload=function(){

// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var myChart1= echarts.init(document.getElementById('main1'));
    var myChart2= echarts.init(document.getElementById('main2'));
    var myChart3= echarts.init(document.getElementById('main3'));

    option = {
        title : {
            text: "",
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['甜菜','小麦','大豆','玉米','大豆']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'甜菜'},
                    {value:310, name:'小麦'},
                    {value:234, name:'大豆'},
                    {value:135, name:'玉米'},
                    {value:1548, name:'大豆'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    option = {
        title : {
            text: "",
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['乡农场','张家湾农场','绥棱林场','三吉台农场','二六农场','海鹰农场','绥棱农场*','张海湾农场*']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'乡农场'},
                    {value:310, name:'张家湾农场'},
                    {value:234, name:'绥棱林场'},
                    {value:135, name:'三吉台农场'},
                    {value:135, name:'二六农场'},
                    {value:135, name:'海鹰农场'},
                    {value:135, name:'绥棱农场*'},
                    {value:1548, name:'张海湾农场*'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart1.setOption(option);


    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['亲子', '采摘', '种地', '烧烤', '垂钓', '亲子'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                axisLine:'flase',
                splitLine:'false',
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 20, 50, 10, 20, 15] ,

                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff681f'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            }
        ]
    };

    myChart2.setOption(option);


    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['橘子', '西红柿', '大豆', '小麦', '苹果', '香蕉'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                axisLine:'flase',
                splitLine:'false',
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[40, 25, 60, 10, 70, 15],

                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                   '#ff681f'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                }


            }
        ]
    };

    myChart3.setOption(option);

}