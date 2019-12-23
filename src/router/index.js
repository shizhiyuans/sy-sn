import VueRouter from 'vue-router'
import second from "../components/second-page.vue";
import Myfirst from "../components/first-page.vue";
import Mythird from "../components/third-page.vue";
import Myfour from "../components/four-page.vue";
import Myfive from "../components/five-page.vue";
const routes = [
    {
        path: "/",
        component: Myfirst,
        meta: {
            // keepAlive: true // 需要被缓存
            isshow:true
        }
    },
    {
        path: "/second",
        component: second,
        isshow:false
    },
    {
        path: "/third",
        component: Mythird,
        // isshow:true
    },
    {
        path: "/four",
        component: Myfour,
        meta: {
            // keepAlive: true // 需要被缓存
            isshow:true
        }
    },
    {
        path: "/five",
        component: Myfive,
        isshow:false
    }
];

const router = new VueRouter({
    routes:routes
});

export default router