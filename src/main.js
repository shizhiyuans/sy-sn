import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.config.productionTip = false
import router from "./router/index.js"
import 'swiper/dist/css/swiper.css';
import store from "./store/index.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
