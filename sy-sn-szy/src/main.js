import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.config.productionTip = false
import router from "./router/index.js"
import 'swiper/dist/css/swiper.css';
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
