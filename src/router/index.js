import VueRouter from 'vue-router'
import second from "../components/second-page.vue";
import Myfirst from "../components/first-page.vue";
import Myfour from "../components/four-page.vue";
import Myfive from "../components/five-page.vue";
import Mysix from "../components/six-page.vue";
import Myseven from "../components/xiangrouter.vue";
const routes = [
    {
        path: "/",
        component: Myfirst,
        meta: {
            keepAlive: true, // 需要被缓存
            isshow:true
        }
    },
    {
        path: "/second",
        component: second,
        isshow:false
    },

    {
        path: "/four",
        component: Myfour,
        meta: {
            keepAlive: true, // 需要被缓存
            isshow:true
        }
    },
    {
        path: "/five",
        component: Myfive,
        isshow:false
    },
    {
        path: "/six",
        component: Mysix,
        meta: {
            keepAlive: true, // 需要被缓存
            isshow:true
        }
    },
    {
        path: "/seven",
        component: Myseven,
        meta: {
            keepAlive: true, // 需要被缓存
            isshow:false
        }
    }
];

const router = new VueRouter({
    routes:routes
});

export default router