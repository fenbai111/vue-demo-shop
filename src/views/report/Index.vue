<template>
  <div>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin" :events="events">
        <el-amap-info-window :position="mywindow.position" :content="address" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
        <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        <el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events"
          :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>
      </el-amap>
    </div>
    <p hidden>location: lng = {{ lng }} lat = {{ lat }}</p>
    <div class = "localtion">
      <p >我的位置:</p>
      <p style="color:gray;font-size:15px;">{{ address }}</p>
    </div>
    <mt-field style="width:100vw;" class = "localtion" label="备注" placeholder="introduction" type="textarea" rows="2" v-model="introduction"></mt-field>
    <el-button type="success" style="width:100vw;" @click.native="addItem">成功按钮</el-button>
  </div>

</template>


<style>
  .amap-page-container {
    height: 500px;
  }
  .el-button-primary .router-link{color:#fff;}
  .login-bottom a{
  	display: block;
  	width: 80%;
  	height: 3.5rem;
  	line-height: 3.5rem;
  	text-align: center;
  	color: #fff;
  	background: #7B7DE4;
  	box-shadow: 0 2px 13px 0 rgba(123,125,229,0.69);
  	border-radius: 0.4rem;
  	margin: 2rem auto;
  	font-size:1.2rem;
  }
  .login-bottom a:hover{
  	background: #5657a0;
  }
  .localtion {
    margin:0px;
    padding:0px;
    background-color:#E7EAEB;
    font-family:"微软雅黑","黑体","宋体";
    font-size:18px;
    height:45px;
  }
</style>



<script>
  import AMap from 'vue-amap';
  export default {
    data() {
      let self = this;
      return {
        events: {
          click(e) {
            let {lng, lat} = e.lnglat;
            self.lng = lng;
            self.lat = lat;
            var geocoder = new AMap.Geocoder({
              radius: 1000,
              extensions: "all"
            });
            geocoder.getAddress([lng, lat], function (status, result) {
              if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                  self.address = result.regeocode.formattedAddress;
                  self.$nextTick();
                }
              }
            });
          }
        },
        searchOption: {
          city: '上海',
          citylimit: true
        },
        zoom: 15,
        center: [11.5273285, 31.21515000],


        circle: {
          clickable: true,
          center: [113.36114, 22.31889],
          radius: 500,
          fillOpacity: 0.3,
          strokeStyle: 'dashed',
          fillColor: '#FFFF00',
          strokeColor: '#00BFFF',
          loaded: false,
        },
        lng: 0,
        lat: 0,
        address: '',

        marker: {
          position: [113.36114, 22.31889],
          events: {
            click: () => {
              if (this.mywindow.visible === true) {
                this.mywindow.visible = false
              } else {
                this.mywindow.visible = true
              }
            },
            dragend: (e) => {
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: false
        },
        mywindow: {
          position: [113.36114, 22.31889],
          content: '<h4>该点数据信息</h4><div class="text item">Information A: ...</div><div class="text item">Information B: ...</div>',
          visible: true,
          events: {
            close() {
              this.mywindow.visible = false
            }
          }
        },


        plugin: [{
          pName: 'Geolocation',
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.address = result.position.formattedAddress;
                  self.loaded = true;
                  self.$nextTick();
                  self.address = result.formattedAddress;
                  console.log(result);
                }
              });
            }
          }
        }]


      };
    }
  }


</script>
