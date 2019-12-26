<template>
    <div class="footer">
        <div class="divone"  @click="clickOne">
            <span class="foot-img">
                <img v-if="see =='1'" src="https://image2.suning.cn/uimg/cms/img/157543975265772267.png?from=mobile" alt="">
                <img v-if="see != '1'"  src="//image.suning.cn/uimg/cms/img/157105696599538235.png" alt="">
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
                <img v-if="see !='2'" src="https://image2.suning.cn/uimg/cms/img/157543979328589256.png?from=mobile" alt="">
                <img v-if="see == '2'" src="//image.suning.cn/uimg/cms/img/157105763151658248.png" alt="">
            </span>
            <span>购物车</span>
            <span class="dingwei"  v-if="see !='2'&&this.$store.state.num !=0" >{{num}}</span>
        </div>
        <div class="divone"  @click="clickFive">
            <span class="foot-img">
                <img  v-if="see !='3'" src="https://image1.suning.cn/uimg/cms/img/157543980229048220.png?from=mobile" alt="">
                <img  v-if="see == '3'" src="//image.suning.cn/uimg/cms/img/157105768594001788.png" alt="">
            </span>
            <span>我的易购</span>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
        }
    },
    methods:{
        clickOne(){
            this.$router.push({ path: "/"});
            this.$store.commit("clickO")
        },
        clickTwo(){
            this.$router.push({ path: "/second"});
        },
        clickFour(){
            this.$router.push({ path: "/four"});
            this.$store.commit("clickt")
        },
        clickFive(){
            this.$router.push({ path: this.$store.state.path});
            if(this.$store.state.path == 'six') {
                this.$store.commit("clicks");
            }
        }
    },
    computed:{
        see(){
            return this.$store.state.see
        },
        num(){
            return this.$store.state.num
            
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
        position: relative;
    }
    .dingwei {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        background: #DD0000;
        color: white;
        top: 0;
        right: 20px;
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