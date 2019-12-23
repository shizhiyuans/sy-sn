<template>
    <div class="footer">
        <div class="divone"  @click="clickOne">
            <span class="foot-img">
                <img v-if="see == '1'" src="https://image2.suning.cn/uimg/cms/img/157543975265772267.png?from=mobile" alt="">
                <img v-if="see == '2'"  src="//image.suning.cn/uimg/cms/img/157105696599538235.png" alt="">
            </span>
            <span>猜你喜欢</span>
        </div>
        <div class="divone"  @click="clickTwo">
            <span class="foot-img">
                <img src="https://image2.suning.cn/uimg/cms/img/157562573743964714.png?from=mobile" alt="">
            </span>
            <span>分类</span>
        </div>
        <a class="divone" href="https://c.m.suning.com/channel/higoubq11.html?safp=f73ee1cf.wapindex7.113464329889.3">
            <span class="foot-img">
                <img src="https://image1.suning.cn/uimg/cms/img/157543978244974042.png?from=mobile" alt="">
            </span>
            <span>必抢清单</span>
        </a>
        <div class="divone"  @click="clickFour">
            <span class="foot-img">
                <img v-if="see == '1'" src="https://image2.suning.cn/uimg/cms/img/157543979328589256.png?from=mobile" alt="">
                <img v-if="see == '2'" src="//image.suning.cn/uimg/cms/img/157105763151658248.png" alt="">
            </span>
            <span>购物车</span>
        </div>
        <div class="divone"  @click="clickFive">
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
        return {
            see:"1",
        }
    },
    methods:{
        clickOne(){
            this.see = '1'
            this.$router.push({ path: "/"});
        },
        clickTwo(){
            this.$router.push({ path: "/second"});
            // document.querySelector('.footer').style.display = "none"
        },
        clickFour(){
            this.see = '2'
            this.$router.push({ path: "/four"});
        },
        clickFive(){
            this.$router.push({ path: "/five"});
        }
    }
}
</script>

<style scoped>
    a {
        color: #333;
    }
    .footer {
        display: flex;
        justify-content: space-between;
        height: 55px;
        width: 100%;
        flex-shrink: 0
    }
    .footer .divone{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
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