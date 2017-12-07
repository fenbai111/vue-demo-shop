import Vue from 'vue'
import App from './App'
import router from './router'
import AMap from 'vue-amap';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'fe2f51cffa60876c98bfd9f49528c90a',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
