<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="top-pp">
        <div class="title">
            <span>购物车</span>
        </div>
        <div v-if="this.$store.state.num == '0'">
            <div class="two-box">
                <div class="box-1" v-if="this.$store.state.say == '1'">
                    <span class="box-1-1">登陆后同步电脑与手机购物车的商品</span>
                    <span class="box-1-2">去登录</span>
                </div>
                <div class="box-2">
                    <div class="box-img">
                        <img src="//oss.suning.com/vss/activity/wximg/cart/sn-cart-empty.png" alt="">
                    </div>
                    <div class="box-text">购物车还是空的，快来挑选好货吧</div>
                    <div class="box-text-t">去逛逛</div>
                </div>
            </div>
            <div class="last">
                没有更多啦
            </div>
        </div>
        <div v-if="this.$store.state.num != '0'">
            <div class="container">
                <div class="container-title">
                    <div class="container-title-a">
                        <span class="iconfont icon-gou"></span>
                        <span>苏宁自营</span>
                    </div>
                    <div class="container-title-b">免运费</div>
                </div>
                <div class="layout" v-for="(item,index) in this.$store.state.arr" :key="index">
                    <div class="layout-1 iconfont icon-gou"></div>
                    <div class="layout-2">
                        <div class="layout-2-img">
                            <img :src="item.images" alt="">
                        </div>
                        <div class="layout-2-con">
                            <p>丽兹葵花籽油 食用油 物理压榨 乌克兰原装进口 5L</p>
                            <div class="NUMber">
                                <div>
                                    <span class="soooos">￥</span>
                                    <span class="colorsa">59</span>
                                    <span class="soooos">.9</span>
                                </div>
                                <div class="Number-2">
                                    <span class="Number-span-1">-</span>
                                    <span class="Number-span-2">{{this.$store.state.linshinum}}</span>
                                    <span class="Number-span-3">+</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="layout-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
        }
    },
    components: {
    
    },
    methods: {
    },
    computed:{
        list(){
            return this.$store.state.arr
        }
    }
}
</script>

<style scoped>
    .top-pp {
        background: rgb(240,240,240);
        height: 100%;
    }
    .title {
        width: 100%;
        height: 48px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title>span {
        font-size: 19px;
        color: #222
    }
    .two-box {
        padding: 14px;
        width: 100%;
        height: 375px;
        display: flex;
        flex-direction: column;

    }
    .box-1 {
        width: 100%;
        height: 33px;
        background: #ffe37e;
        display: flex;
        justify-content: space-between;
        padding: 6px 14px;
        border-radius: 8px;
        flex-shrink: 0
    }

    .box-1-1 {
        color: #222;
        font-size: 13px;
    }
    .box-1-2 {
        background-color: #222;
        font-size: 14px;
        color: #ffe37e;
        border-radius: 6px;
        padding: 0 2px;
    }
    .box-2 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .box-img {
        width: 96px;
        height: 96px;
        margin-bottom: 20px;
    }
    .box-img img{
        width: 100%;
        height: 100%;
    }

    .box-text {
        font-size: 15px;
        color: #666;
        margin-bottom: 15px;
    }
    .box-text-t {
        width: 60px;
        height: 26px;
        color: #666;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #fff;
        text-align: center;
    }
    .last {
        text-align: center;
        color: #666;
    }
    .container {
        width: 95%;
        padding: 14px;
        background: #fff;
        margin: 10px ;
    }
    .container-title {
        width: 100%;
        height: 45px;
        padding: 13px 13px 10px 0;
        display: flex;
        justify-content: space-between;
    }
    .container-title-a span:first-child{
        color:rgb(255,204,0);

    }
    .container-title-a span:last-child{
        color: #333;
        font-size: 14px;
        margin-left: 15px;
        
    }
    .container-title-b {
        color: #FF6600;
        font-size: 12px;
    }
    .layout {
        width: 100%;
        height: 133px;
        padding: 0 13px 20px 0;
        display: flex;
        justify-content: space-between;
    }
    .layout-1 {
        width: 33px;
        height: 100px;
        color:rgb(255,204,0);
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
    .layout-2 {
        flex-grow: 1;
        display: flex;
    }
    .layout-2-img {
        width: 100px;
        height: 100px;
    }
    .layout-2-img img {
        width: 100%;
        height: 100%;
    }
    .layout-2-con {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .Number-2 {
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 20px;
        border: 1px solid #ccc;
        padding: 0 5px;
    }
    .Number-span-1 {
        width: 20px;
        height: 20px;
        background: #f4f4f4;
        color: #CACACA;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        font-size: 18px;
    }
    .Number-span-2 {
        width: 43px;
        height: 24px;
        padding: 0 2px;
        text-align: center;
        line-height: 24px;
    }
    .Number-span-3 {
        width: 20px;
        height: 20px;
        background: #f4f4f4;
        color: #333;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        font-weight: bold;
        font-size: 18px;
    }

    .NUMber {
        display: flex;
        justify-content: space-between;
    }
    .colorsa {
        color: #ff4422;
        font-size: 15px;
        font-weight: bold;
    }
    .soooos {
        color: #ff4422;
        font-size: 12px;
        font-weight: bold;
    }































</style>