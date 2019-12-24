import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.config.productionTip = false
import router from "./router/index.js"
import 'swiper/dist/css/swiper.css';
import store from "./store/index.js"
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
