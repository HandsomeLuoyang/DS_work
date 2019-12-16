<!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
            <title>位置经纬度 + 驾车规划路线</title>
            <style type="text/css">
            html,
            body,
            #container {
              width: 100%;
              height: 100%;
            }
            </style>
            <style type="text/css">
                #panel {
                    position: fixed;
                    background-color: white;
                    max-height: 90%;
                    overflow-y: auto;
                    top: 10px;
                    right: 10px;
                    width: 280px;
                }
                #panel .amap-call {
                    background-color: #009cf9;
                    border-top-left-radius: 4px;
           	        border-top-right-radius: 4px;
                }
                #panel .amap-lib-driving {
        	        border-bottom-left-radius: 4px;
           	        border-bottom-right-radius: 4px;
                    overflow: hidden;
                }
            </style>
            <link rel="stylesheet" href="https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css" />
            <script src="https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js"></script>
            <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=47f6201d035967605a79f0032b5fc154&plugin=AMap.Driving"></script>
            <script type="text/javascript" src="https://cache.amap.com/lbs/static/addToolbar.js"></script>
        </head>
        <body>
        <div id="container"></div>
        <div id="panel"></div>
        <script type="text/javascript">
            //基本地图加载
            var map = new AMap.Map("container", {
                resizeEnable: true,
                viewMode:'3D',
                center: [106.550464,29.563761],//地图中心点
                zoom: 8 //地图显示的缩放级别
            });

        var marker = new AMap.Marker({
        position: [106.738211,29.840777],

        offset: new AMap.Pixel(-13, -30)
        });

        marker.setTitle('我是marker的title');
        marker.setLabel({
        offset: new AMap.Pixel(20, 20),  //设置文本标注偏移量
        content: "<div class='info'>我是 marker 的 label 标签</div>", //设置文本标注内容
        direction: 'right' //设置文本标注方位
    });



            //构造路线导航类
           function draw_panel()
          {
          	var driving = new AMap.Driving({
                map: map,
                panel: "panel"
            }); 
            // 根据起终点经纬度规划驾车导航路线
            driving.search(new AMap.LngLat(106.22343, 29.12334), new AMap.LngLat(106.56566, 29.64543), function(status, result) {
                // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    log.success('绘制救援路线完成')
                } else {
                    log.error('获取救援路线失败：' + result)
                }
            });
          }

        </script>
        </body>
        </html>