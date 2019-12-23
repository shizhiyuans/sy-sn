<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="top-pp">
        <div class="title">
            <span>购物车</span>
        </div>
        <div class="two-box">
            <div class="box-1">
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
    </div>
</template>
<script>

export default {
        data(){
        return {
        }
    },
        components: {
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
</style>