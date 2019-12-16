import VueRouter from 'vue-router'
import second from "../components/second-page.vue";
import Myfirst from "../components/first-page.vue";
import Mythird from "../components/third-page.vue";
import Myfour from "../components/four-page.vue";
import Myfive from "../components/five-page.vue";
const routes = [
    {
        path: "/",
        component: Myfirst
    },
    {
        path: "/second",
        component: second
    },
    {
        path: "/third",
        component: Mythird
    },
    {
        path: "/four",
        component: Myfour
    },
    {
        path: "/five",
        component: Myfive
    }
];

const router = new VueRouter({
    routes:routes
});

export default router