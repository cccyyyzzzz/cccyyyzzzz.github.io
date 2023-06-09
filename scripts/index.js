var symptomName = last_month_day();

$(function(){


  init();
  init2();
    $("#el-dialog").addClass("hide");
  $(".close").click(function(event) {
    $("#el-dialog").addClass("hide");
  });

  var date = new Date();
     var numble = date.getDate();
     var today = getFormatMonth(new Date());
     $("#date1").html(today);
     $("#date2").html(today);
     $("#date3").html(today);
     $("#date4").html(today);


  lay('.demo-input').each(function(){
     laydate.render({
        type: 'month',
         elem: this,
         trigger: 'click',
         theme: '#95d7fb',
         calendar: true,
         showBottom: true,
         done: function () {
            console.log( $("#startDate").val())

         }
     })
 });

})
function init(){
var barchart1 = echarts.init(document.getElementById('barchart1'));
  barchart1.setOption({
    grid:{
    x:90,
    y:20,
    x2:5,
    y2:20,
    width:300,
    height:130,
  },
      xAxis:{
          type:"category",
          data:['衢州', '绍兴', '宁波', '杭州', '温州', '台州', '丽水'],
          axisLabel:{
            interval:0,
            textStyle:{
              color:'#fff'
            }
          }
      },
      yAxis:{
          type:"value",
          axisLabel:{
            interval:0,
            textStyle:{
              
              color:'#fff'
            }
          }
      },
      title:{
        subtext:'单位:千万元',
        left:'right',
        color:'#FFFFFF'
      },
      series:{
          // 图表类型
          type:"bar",
          // bar:柱形图  line：折线图
          data:[2000, 4000, 8000, 10000, 8000, 4000, 2000],
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(256, 256, 256, 0)'
          },
      // itemStyle:{
      //     color:"#36CFFF"
      // }
      barWidth:'50%'
      },
      color: new echarts.graphic.LinearGradient(
                  //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                  //通过修改前4个参数，可以实现不同的渐变方向
                  /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                    每项为一个对象，包含offset和color两个参数
                  */
                  0, 0, 0, 1, [{//代表渐变色从正上方开始
                          offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                          color: '#36CFFF'
                      }, //柱图渐变色
                      {
                          offset: 1, //指100%处的颜色
                          color: '#65FEFF'
                      }
                  ]
              ),
              


      
  });
  var barchart2 = echarts.init(document.getElementById('barchart2'));
  barchart2.setOption({
    grid:{
    x:60,
    y:20,
    x2:5,
    y2:20,
    width:300,
    height:130,
  },
      xAxis:{
          type:"category",
          data:['小学', '初中', '高中', '高等学院'],
          axisLabel:{
            interval:0,
            textStyle:{
              color:'#fff'
            }
          }
      },
      yAxis:{
          type:"value",
          axisLabel:{
            interval:0,
            textStyle:{
              
              color:'#fff'
            }
          }
      },
      title:{
        subtext:'单位:万人',
        left:'right',
        color:'#FFFFFF'
      },
      series:{
          // 图表类型
          type:"bar",
          // bar:柱形图  line：折线图
          data:[1000,800,400,200],
      // itemStyle:{
      //     color:"#36CFFF"
      // }
      barWidth:'50%'
      },
      color: new echarts.graphic.LinearGradient(
                  //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                  //通过修改前4个参数，可以实现不同的渐变方向
                  /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                    每项为一个对象，包含offset和color两个参数
                  */
                  0, 0, 0, 1, [{//代表渐变色从正上方开始
                          offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                          color: '#36CFFF'
                      }, //柱图渐变色
                      {
                          offset: 1, //指100%处的颜色
                          color: '#65FEFF'
                      }
                  ]
              ),
              


      
  });
  //地图
//   var mapChart = echarts.init(document.getElementById('mapChart'));
//   mapChart.setOption({
    
//       bmap: {
//           center: [118.096435,24.485408],
//           zoom: 12,
//           roam: true,

//       },
//       tooltip : {
//           trigger: 'item',
//           formatter:function(params, ticket, callback){
//               return params.value[2]
//           }
//       },
//       series: [{
//           type: 'scatter',
//           coordinateSystem: 'bmap',
//           data: [
//             [118.096435, 24.485408, '厦门市'] ,
//             [118.094564, 24.457358, '厦门第一医院'] ,
//             [118.104103, 24.477761, '厦门中山医院'],
//             [118.14748, 24.506295, '厦门中医院'],
//             [118.254841, 24.665349, '厦门第五医院'],
//            ]
//       }]
//   });
//   mapChart.on('click', function (params) {
//       $("#el-dialog").removeClass('hide');
//       $("#reportTitle").html(params.value[2]);
//   });

//   var bmap = mapChart.getModel().getComponent('bmap').getBMap()
//   bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP ]}));
//   bmap.setMapStyle({style:'midnight'})


  var pieChart1 = echarts.init(document.getElementById('pieChart1'));
  pieChart1.setOption({
    grid:{
        x:90,
        y:10,
        x2:5,
        y2:20,
        width:300,
        height:130,
      },
xAxis:{
  type:"value",
    axisLabel:{
      interval:0,
      textStyle:{
        
        color:'#fff'
      }
    }
},

yAxis:{
  type:"category",
    data:['杭州市区', '宁波市区', '温州市区', '衢州市区', '台州市区', '绍兴市区'],
    axisLabel:{
      textStyle:{
        color:'#fff'
      }
    }
    // type:"value",
    // axisLabel:{
    //   interval:0,
    //   textStyle:{
        
    //     color:'#fff'
    //   }
    // }
},
series:{
    // 图表类型
    type:"bar",
    // bar:柱形图  line：折线图
    data:[140, 125, 100, 125, 110, 95],
// itemStyle:{
//     color:"#36CFFF"
// }
barWidth:'50%'
},
color: new echarts.graphic.LinearGradient(
            //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
            //通过修改前4个参数，可以实现不同的渐变方向
            /*第五个参数则是一个数组，用于配置颜色的渐变过程。
              每项为一个对象，包含offset和color两个参数
            */
            0, 0, 0, 1, [{//代表渐变色从正上方开始
                    offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: '#36CFFF'
                }, //柱图渐变色
                {
                    offset: 1, //指100%处的颜色
                    color: '#65FEFF'
                }
            ]
        ),
        



});

    
    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({
        xAxis:{
            type:"category",
            data:['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            axisLabel:{
                  textStyle:{
                    color:'#fff'
                  }
                }
        },
        yAxis:{
            type:"value",
            axisLabel:{
                  textStyle:{
                    color:'#fff'
                  }
                }
        },
        title:{
            subtext:'单位:万人',
            left:'right',
            color:'#FFFFFF'
          },
        series:{
            // 图表类型
            type:"line",
            // bar:柱形图  line：折线图
            data:[2000, 3000, 4000, 5000, 6000, 7000, 10000],
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(213,72,120,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(213,72,120,0.3)'
                  }
                ])
              }
  
        },
        grid:{
            x:60,
            y:20,
            x2:5,
            y2:20,
            width:300,
            height:130,
          },
  
    });

    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({
        xAxis:{
            type:"category",
            data:['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            axisLabel:{
                  textStyle:{
                    color:'#fff'
                  }
                }
        },
        title:{
            subtext:'单位:千万元',
            left:'right',
            color:'#FFFFFF'
          },
        yAxis:{
            type:"value",
            axisLabel:{
                  textStyle:{
                    color:'#fff'
                  }
                }
        },
        series:{
            // 图表类型
            type:"line",
            // bar:柱形图  line：折线图
            data:[2000, 3000, 4000, 5000, 6000, 7000, 10000],
            // areaStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       {
            //         offset: 0,
            //         color: 'rgba(213,72,120,0.8)'
            //       },
            //       {
            //         offset: 1,
            //         color: 'rgba(213,72,120,0.3)'
            //       }
            //     ])
            //   }

            // lineStyle: {      // 阴影部分
            //     shadowOffsetX: 0, // 折线的X偏移    
            //     shadowOffsetY: 9,// 折线的Y偏移  
            //     shadowBlur: 0,  // 折线模糊
            //     shadowColor: "rgba(145, 132, 132, 1)", //折线颜色
            //   },


        },
        grid:{
            x:90,
            y:10,
            x2:5,
            y2:0,
            width:300,
            height:130,
          },

    });

   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({
    grid:{
        x:60,
        y:20,
        x2:5,
        y2:20,
        width:300,
        height:130,
      },
    title: {
        // text: '{b|10000000}',
        // subtext: '{a|年薪}',
        subtextStyle:{
          rich:{
              a:{
                  fontSize:"38",
              }
          }  
        },
        textStyle:{
            rich:{
                b:{
                    fontSize:"48"
                }
            }
        },
        left: 'center',
        top:"center"
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    // },
    color: ['#3333FF', '#3366FF', '#007DDF', '#7CCDF5'],

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%','55%'],
            center: ['50%', '50%'],
            data: [
                {value: 79992, name: '60岁以下'},
                {value: 142992, name: '18岁以下'},
                {value: 179992, name: '18-35岁'},
                {value: 269992, name: '35-60岁'},
            
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            radius: ['55%', '60%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 1,
                itemStyle: {
                    color: "rgba(250,250,250,1)",
                },
            }],
        }
    ]
});
var piechart4 = echarts.init(document.getElementById('piechart4'));
piechart4.setOption({
    title:[//标题组件，数组里的一个对象表示一个标题组件
        {text:'养老保险参保率',left:'center',bottom:'5%',textStyle:{color:"#fff"}}
    ],
    series: [//系列
        {
            name: '养老保险参保率',
            type: 'pie',//pie类型的图实现环形图
            radius: ['75%','80%'],//数组的话，表示内圆和外圆的半径大小，相对于宽高中较小的那一个。
            center:['50%','50%'],//圆心坐标
            avoidLabelOverlap: false,//是否启用防止标签重叠策略
            startAngle:90,//第一个数据开始绘制的角度，以正交直角坐标系为标准
            label: {//每个数据的标签
                show: false,//设置为true则显示第一个数据
                position: 'center',//位置居中
                formatter:'{d}%',//{d}表示数据在总数据中的百分比
                fontSize:20,
                fontWeight:'bold'
            },
            color:['#40E0D0','#1E3E55'],//系列的颜色
            // emphasis: {//高亮，即鼠标经过时的样式
            //     scale:false//表示不放大item
            // },
            // labelLine: {
            //     show: true
            // },
            data: [
                {value: 91, name: '',emphasis:{
                  label:{
                    show:true
                  }
                }},
                {value:9,name:'',emphasis:{
                  label:{
                    show:true
                  }
                }}
                // {value:20, name:'',emphasis:{
                //     label:{
                //         show:false//这个数据高亮时不显示label，就不会显示替遮住第一个数据的label值了
                //     }
                // }}
            ]
        }
    ]
});
    var piechart5 = echarts.init(document.getElementById('piechart5'));
    piechart5.setOption({
        title:[//标题组件，数组里的一个对象表示一个标题组件
            {text:'医疗保险参保率',left:'center',bottom:'5%',textStyle:{color:"#fff"}}
        ],
        series: [//系列
            {
                name: '养老保险参保率',
                type: 'pie',//pie类型的图实现环形图
                radius: ['75%','80%'],//数组的话，表示内圆和外圆的半径大小，相对于宽高中较小的那一个。
                center:['50%','50%'],//圆心坐标
                avoidLabelOverlap: false,//是否启用防止标签重叠策略
                startAngle:90,//第一个数据开始绘制的角度，以正交直角坐标系为标准
                label: {//每个数据的标签
                    show: false,//设置为true则显示第一个数据
                    position: 'center',//位置居中
                    formatter:'{d}%',//{d}表示数据在总数据中的百分比
                    fontSize:20,
                    fontWeight:'bold'
                },
                color:['#FF00FF','#1E3E55'],//系列的颜色
                // emphasis: {//高亮，即鼠标经过时的样式
                //     scale:false//表示不放大item
                // },
                // labelLine: {
                //     show: true
                // },
                data: [
                    {value: 95, name: '',emphasis:{
                      label:{
                        show:true
                      }
                    }},
                    {value:5,name:'',emphasis:{
                      label:{
                        show:true
                      }
                    }}
                    // {value:20, name:'',emphasis:{
                    //     label:{
                    //         show:false//这个数据高亮时不显示label，就不会显示替遮住第一个数据的label值了
                    //     }
                    // }}
                ]
            }
        ]
    });
        var piechart6 = echarts.init(document.getElementById('piechart6'));
    piechart6.setOption({
        title:[//标题组件，数组里的一个对象表示一个标题组件
            {text:'就业保险参保率',left:'center',bottom:'5%',textStyle:{color:"#fff"}}
        ],
        series: [//系列
            {
                name: '养老保险参保率',
                type: 'pie',//pie类型的图实现环形图
                radius: ['75%','80%'],//数组的话，表示内圆和外圆的半径大小，相对于宽高中较小的那一个。
                center:['50%','50%'],//圆心坐标
                avoidLabelOverlap: false,//是否启用防止标签重叠策略
                startAngle:90,//第一个数据开始绘制的角度，以正交直角坐标系为标准
                label: {//每个数据的标签
                    show: false,//设置为true则显示第一个数据
                    position: 'center',//位置居中
                    formatter:'{d}%',//{d}表示数据在总数据中的百分比
                    fontSize:20,
                    fontWeight:'bold'
                },
                color:['#FF0000','#1E3E55'],//系列的颜色
                // emphasis: {//高亮，即鼠标经过时的样式
                //     scale:false//表示不放大item
                // },
                // labelLine: {
                //     show: true
                // },
                data: [
                    {value: 98, name: '',emphasis:{
                      label:{
                        show:true
                      }
                    }},
                    {value:2,name:'',emphasis:{
                      label:{
                        show:true
                      }
                    }}
                    // {value:20, name:'',emphasis:{
                    //     label:{
                    //         show:false//这个数据高亮时不显示label，就不会显示替遮住第一个数据的label值了
                    //     }
                    // }}
                ]
            }
        ]
    });
        var piechart7 = echarts.init(document.getElementById('piechart7'));
    piechart7.setOption({
        title:[//标题组件，数组里的一个对象表示一个标题组件
            {text:'公积金参保率',left:'center',bottom:'5%',textStyle:{color:"#fff"}}
        ],
        series: [//系列
            {
                name: '养老保险参保率',
                type: 'pie',//pie类型的图实现环形图
                radius: ['75%','80%'],//数组的话，表示内圆和外圆的半径大小，相对于宽高中较小的那一个。
                center:['50%','50%'],//圆心坐标
                avoidLabelOverlap: false,//是否启用防止标签重叠策略
                startAngle:90,//第一个数据开始绘制的角度，以正交直角坐标系为标准
                label: {//每个数据的标签
                    show: false,//设置为true则显示第一个数据
                    position: 'center',//位置居中
                    formatter:'{d}%',//{d}表示数据在总数据中的百分比
                    fontSize:20,
                    fontWeight:'bold'
                },
                color:['#00FA9A','#1E3E55'],//系列的颜色
                // emphasis: {//高亮，即鼠标经过时的样式
                //     scale:false//表示不放大item
                // },
                // labelLine: {
                //     show: true
                // },
                data: [
                    {value: 85, name: '',emphasis:{
                      label:{
                        show:true
                      }
                    }},
                    {value:15,name:'',emphasis:{
                      label:{
                        show:true
                      }
                    }}
                    // {value:20, name:'',emphasis:{
                    //     label:{
                    //         show:false//这个数据高亮时不显示label，就不会显示替遮住第一个数据的label值了
                    //     }
                    // }}
                ]
            }
        ]
    });
}

// function init2(){
//   var lineChart3 = echarts.init(document.getElementById('lineChart3'));
//   lineChart3.setOption({

//     color:["#87cefa","#ff7f50",],
//     legend: {
//         y : 'top',
//         x : 'center',
//         textStyle : {
//             color : '#ffffff',

//         },
//          data : ['门诊人次','住院人次'],
//     },
//     calculable : false,
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a}<br/>{b}<br/>{c}人"
//     },
//     dataZoom: {
//          show: true,
//          realtime : true,
//          start: 0,
//          end: 18,
//          height: 20,
//          backgroundColor: '#f8f8f8',
//          dataBackgroundColor: '#e4e4e4',
//          fillerColor: '#87cefa',
//          handleColor: '#87cefa',
//      },
//     yAxis: [
//           {
//               type: 'value',
//               axisLine : {onZero: false},
//               axisLine:{
//                   lineStyle:{
//                       color: '#034c6a'
//                   },
//               },

//               axisLabel: {
//                   textStyle: {
//                       color: '#fff'
//                   },
//                   formatter: function (value) {
//                       return value + "人"
//                   },
//               },
//               splitLine:{
//                   lineStyle:{
//                       width:0,
//                       type:'solid'
//                   }
//               }
//           }
//       ],
//       xAxis: [
//           {
//               type: 'category',
//               data : symptomName,
//               boundaryGap : false,
//               axisLine:{
//                   lineStyle:{
//                       color: '#034c6a'
//                   },
//               },
//               splitLine: {
//                   "show": false
//               },
//               axisLabel: {
//                   textStyle: {
//                       color: '#fff'
//                   },
//                   formatter: function (value) {
//                       return value + ""
//                   },
//               },
//               splitLine:{
//                   lineStyle:{
//                       width:0,
//                       type:'solid'
//                   }
//               },
//           }
//       ],
//       grid:{
//               left: '5%',
//               right: '5%',
//               bottom: '20%',
//               containLabel: true
//       },
//       series : [
//         {
//             name:'门诊费用',
//             type:'line',
//             smooth:true,
//             itemStyle: {
//                 normal: {
//                     lineStyle: {
//                         shadowColor : 'rgba(0,0,0,0.4)'
//                     }
//                 }
//             },
//             data:[1150, 180, 2100, 2415, 1212.1, 3125,1510, 810, 2100, 2415, 1122.1, 3215,1510, 801, 2001, 2245, 1232.1, 3245,1520, 830, 2200, 2145, 1223.1, 3225,150, 80, 200, 245, 122.1, 325]
//         },
//         {
//             name:'住院费用',
//             type:'line',
//             smooth:true,
//             itemStyle: {
//                 normal: {
//                     lineStyle: {
//                         shadowColor : 'rgba(0,0,0,0.4)'
//                     }
//                 }
//             },
//             data:[2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005,]
//         },
//     ]
//   });


//   var lineChart4 = echarts.init(document.getElementById('lineChart4'));
//   lineChart4.setOption({

//     color:["#87cefa","#ff7f50",],
//     calculable : false,
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a}<br/>{b}<br/>{c}元"
//     },
//     dataZoom: {
//          show: true,
//          realtime : true,
//          start: 0,
//          end: 18,
//          height: 20,
//          backgroundColor: '#f8f8f8',
//          dataBackgroundColor: '#e4e4e4',
//          fillerColor: '#87cefa',
//          handleColor: '#87cefa',
//      },
//     yAxis: [
//           {
//               type: 'value',
//               axisLine : {onZero: false},
//               axisLine:{
//                   lineStyle:{
//                       color: '#034c6a'
//                   },
//               },

//               axisLabel: {
//                   textStyle: {
//                       color: '#fff'
//                   },
//                   formatter: function (value) {
//                       return value + "元"
//                   },
//               },
//               splitLine:{
//                   lineStyle:{
//                       width:0,
//                       type:'solid'
//                   }
//               }
//           }
//       ],
//       xAxis: [
//           {
//               type: 'category',
//               data : symptomName,
//               boundaryGap : false,
//               axisLine:{
//                   lineStyle:{
//                       color: '#034c6a'
//                   },
//               },
//               splitLine: {
//                   "show": false
//               },
//               axisLabel: {
//                   textStyle: {
//                       color: '#fff'
//                   },
//                   formatter: function (value) {
//                       return value + ""
//                   },
//               },
//               splitLine:{
//                   lineStyle:{
//                       width:0,
//                       type:'solid'
//                   }
//               },
//           }
//       ],
//       grid:{
//               left: '5%',
//               right: '5%',
//               bottom: '20%',
//               containLabel: true
//       },
//       series : [
//         {
//             name:'医疗费用',
//             type:'line',
//             smooth:true,
//             itemStyle: {
//                 normal: {
//                     lineStyle: {
//                         shadowColor : 'rgba(0,0,0,0.4)'
//                     }
//                 }
//             },
//             data:[1500, 800, 1200, 2450, 1122.1, 1325,1150, 180, 1200, 1245, 1122.1, 1325,150, 180, 1200, 2145, 1212.1, 3215,1510, 180, 2100, 2415, 122.1, 325,150, 80, 200, 245, 122.1, 325].reverse()
//         },
//     ]
//   });

//   //年龄分布
//   var pieChart2 = echarts.init(document.getElementById('pieChart2'));
//   pieChart2.setOption({
//     color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
//     tooltip : {
//      trigger: 'item',
//      formatter: "{a}<br/>{b}<br/>{c}人"
//     },
//     calculable : true,
//     series : [
//         {
//             name:'发病人数',
//             type:'pie',
//             radius : [30, 110],
//             center : ['50%', '50%'],
//             roseType : 'area',
//             x: '50%',



//             sort : 'ascending',
//             data:[
//                 {value:10, name:'婴儿(1-3岁)'},
//                 {value:5, name:'少儿(4-10岁)'},
//                 {value:15, name:'少年(10-18岁)'},
//                 {value:25, name:'青年(18-45岁)'},
//                 {value:125, name:'中年(45-60岁)'},
//                 {value:175, name:'老年(60岁以上)'},
//             ]
//         }
//     ]
//   })
//   var barchart1 = echarts.init(document.getElementById('barchart1'));
//   barchart1.setOption({

//     color:["#87cefa","#ff7f50","#32cd32","#da70d6",],

//     legend: {
//         y : '260',
//         x : 'center',
//         textStyle : {
//             color : '#ffffff',

//         },
//          data : ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',],
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a}<br/>{b}<br/>{c}G ({d}%)"
//     },
//     calculable : false,
//     series : [
//         {
//             name:'采集数据量',
//             type:'pie',
//             radius : ['40%', '70%'],
//             center : ['50%', '45%'],
//             itemStyle : {
//                 normal : {
//                     label : {
//                         show : false
//                     },
//                     labelLine : {
//                         show : false
//                     }
//                 },
//                 emphasis : {
//                     label : {
//                         show : true,
//                         position : 'center',
//                         textStyle : {
//                             fontSize : '20',
//                             fontWeight : 'bold'
//                         }
//                     }
//                 }
//             },
//             data:[
//                 {value:335, name:'厦门第一医院'},
//                 {value:310, name:'厦门中山医院'},
//                 {value:234, name:'厦门中医院'},
//                 {value:135, name:'厦门第五医院'}

//             ]
//         }
//     ]
//     });

//   //医疗费用组成
//   var pieChart3 = echarts.init(document.getElementById('pieChart3'));
//   pieChart3.setOption({
//     color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
//     tooltip : {
//      trigger: 'item',
//      formatter: "{a}<br/>{b}<br/>{c}元"
//     },
//     calculable : true,
//     series : [
//         {
//             name:'发病人数',
//             type:'pie',
//             radius : [30, 110],
//             center : ['50%', '50%'],
//             roseType : 'area',
//             x: '50%',



//             sort : 'ascending',
//             data:[
//                 {value:10, name:'诊察费用'},
//                 {value:500, name:'检查费用'},
//                 {value:150, name:'检验费用'},
//                 {value:250, name:'西药费用'},
//                 {value:125, name:'中药费用'},
//                 {value:1750, name:'手术费用'},
//             ]
//         }
//     ]
//   })
// }
