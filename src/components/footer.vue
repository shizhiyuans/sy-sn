<template>
    <div class="footer">
        <div @click="clickOne">
            <span class="foot-img">
                <img src="https://image2.suning.cn/uimg/cms/img/157543975265772267.png?from=mobile" alt="">
            </span>
            <span>猜你喜欢</span>
        </div>
        <div @click="clickTwo">
            <span class="foot-img">
                <img src="https://image2.suning.cn/uimg/cms/img/157562573743964714.png?from=mobile" alt="">
            </span>
            <span>分类</span>
        </div>
        <div @click="clickThree">
            <span class="foot-img">
                <img src="https://image1.suning.cn/uimg/cms/img/157543978244974042.png?from=mobile" alt="">
            </span>
            <span>必抢清单</span>
        </div>
        <div @click="clickFour">
            <span class="foot-img">
                <img src="https://image2.suning.cn/uimg/cms/img/157543979328589256.png?from=mobile" alt="">
            </span>
            <span>购物车</span>
        </div>
        <div @click="clickFive">
            <span class="foot-img">
                <img src="https://image1.suning.cn/uimg/cms/img/157543980229048220.png?from=mobile" alt="">
            </span>
            <span>我的易购</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{
        clickOne(){
            this.$router.push({ path: "/"});
        },
        clickTwo(){
            this.$router.push({ path: "/second"});
        },
        clickThree(){
            this.$router.push({ path: "/third"});
        },
        clickFour(){
            this.$router.push({ path: "/four"});
        },
        clickFive(){
            this.$router.push({ path: "/five"});
        }
    }
}
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

    }
    .footer>div{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column
    }

    .foot-img {
        width: 30px;
        height: 30px;
        
    }
    
    .foot-img img {
        width: 100%;
        height: 100%
    }
</style>