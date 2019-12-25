<template>
    <div class="zuidadebox">
        <div class="title">
            <span></span>
            <span class="title-span-1">我的易购</span>
            <span class="iconfont icon-set title-span-1"></span>
        </div>
        <div class="container">
            <div class="anm">
                <div class="contt">
                    <div class="container-img">
                        <img src="//image.suning.cn/uimg/cmf/cust_headpic/869eec0ae70141dc37dd486e5a02e409_00_240x240.jpg?v=09162303" alt="">
                    </div>
                    <span class="xiaospan">去实名认证</span>
                </div>
                <div class="conts">
                    <p>949505887</p>
                    <p>生态值150</p>
                </div>
            </div>
            
            <div>
                <img src="../../public/images/1.jpg" alt="">
            </div>
        </div>
        <div class="third-box">
            <div class="box-9">
                <span>0</span>
                <span>优惠券</span>
            </div>
            <div class="box-9">
                <span>0</span>
                <span>领云钻</span>
            </div>
            <div class="box-9">
                <span>0</span>
                <span>足迹</span>
            </div>
            <div class="box-9">
                <span>0</span>
                <span>我的关注</span>
            </div>
        </div>
        <div class="main-box">
            <div class="fourth-box">
                <div class="fourth-1">
                    <img src="https://oss.suning.com/vss/activity/wximg/my/vip.png" alt="">
                </div>
                <div class="fourth-2">【免费】您可领一张运费券</div>
                <div>立即领取</div>
                <div>></div>
            </div>
            <div class="fourth-box-2">
                <div class="fourth-box-3">
                    <div class="box-3-1">我的订单</div>
                    <div><span class="box-3-2">查看全部</span><span>></span></div>
                </div>
                <div class="new-module">
                    <div class="new-modulr-s">
                        <div class="div-once">
                            <img src="../../public/images/11.jpg" alt="">
                        </div>
                        <div>待支付</div>
                    </div>
                    <div class="new-modulr-s">
                        <div class="div-once">
                            <img src="../../public/images/22.jpg" alt="">
                        </div>
                        <div>待收货</div>
                    </div>
                    <div class="new-modulr-s">
                        <div class="div-once">
                            <img src="../../public/images/33.jpg" alt="">
                        </div>
                        <div>评价有礼</div>
                    </div>
                    <div class="new-modulr-s">
                        <div class="div-once">
                            <img src="../../public/images/44.jpg" alt="">
                        </div>
                        <div>退换/售后</div>
                    </div>
                    <div class="new-modulr-s">
                        <div class="div-once">
                            <img src="../../public/images/55.jpg" alt="">
                        </div>
                        <div>常购清单</div>
                    </div>
                </div>
            </div>
            <div class="server">
                <div class="server-1">必备工具</div>
                <div class="sn-server">
                    <div class="sn-1" v-for="(item,index) in list" :key="index">
                        <div class="sn-img"><img :src="item.image" alt=""></div>
                        <div>{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="charuzhi">
                <div class="bg-one"><img src="https://res.suning.cn/project/msinode/wap/home/image/guessTitle-icon.png" alt=""></div>
                <div class="bg-two">好货推荐</div>
                <div class="bg-three"><img src="https://res.suning.cn/project/msinode/wap/home/image/guessTitle-icon.png" alt=""></div>
            </div>
            
            <div class="mabe-last-box">
                <div class="guestLike">
                    <div class="meiyong"></div>
                    <div class="youdianyong">
                        <div class="img-1"><img src="//res.suning.cn/project/msinode/wap/home/image/like3.png" alt=""></div>
                        <div class="img-2"><img src="//res.suning.cn/project/msinode/wap/home/image/like1.png" alt=""></div>
                    </div>
                    <div class="img-3"><img src="" alt=""></div>
                    <div class="img-4"><img src="//res.suning.cn/project/msinode/wap/home/image/like2.png" alt=""></div>
                </div>

                <div class="box-li">
                    <div class="box-li-img">
                        <img src="//imgservice.suning.cn/uimg1/b2c/image/2GMUZgZwUd_iIC-03Ow-6Q.jpg?from=mobile" alt="">
                    </div>
                    <div class="box-li-container">爱国者（aigo）32GB USB2.0 UDP系列 迷你金属U盘 U268 高速车载U盘 银色</div>
                    <div class="box-li-bottom"><span>￥</span><span>28</span><span>.00</span></div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
        data(){
        return {
            list:[
                {
                    image:"//image.suning.cn/uimg/cms/img/157250874743127029.png",
                    title:"红包 "
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157250876042530564.png",
                    title:"店铺关注"
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157250878626080332.png",
                    title:"足迹"
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157136450994431031.png",
                    title:"客户服务"
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157251063564774447.png",
                    title:"必抢清单"
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157136454213083878.png",
                    title:"拼购"
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157251073785756292.png",
                    title:"校园VIP"
                },
                {
                    image:"//image.suning.cn/uimg/cms/img/157136448419617333.png",
                    title:"我的试用"
                }
            ]
        }
    }
}
</script>

<style scoped>
.zuidadebox {
    overflow: scroll
}
    .title {
        width: 100%;
        height: 35px;
        background: rgb(255,219,71);
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title-span-1 {
        font-size: 20px;
        color: #000;
        font-weight: bold;

    }
    .contt {
        position: relative;
        margin-right: 20px;
    }
    .conts{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .conts p:first-child{
        color: #222;
        font-size: 16px;
        font-weight: bold
    }
    .conts p:last-child{
        color: #fff;
        font-size: 12px;
        background: #E1BB23;
        text-align: center;
        border-radius: 8px;
        padding: 0 5px;
    }
    .container {
        width: 100%;
        height: 95px;
        background: rgb(255,219,71);
        padding: 29px 23px 0;
        display: flex;
        justify-content: space-between
    }
    .anm {
        display: flex;
        align-items: center;
    }
    .container-img {
        width: 66px;
        height: 66px;
        display: flex;
        flex-direction: column;
        border-radius: 50%;
        border: 3px solid #fff;
        overflow: hidden;
    }
    .xiaospan {
        width: 78px;
        display: inline-block;
        margin-top: -10px;
        margin-left: -5px;
        height: 16px;
        background: #FFeCA3;
        border-radius: 4px;
        text-align: center;
        position: absolute;
        top: 60px;
    }
    .container-img img{
        width: 100%;
        height: 100%;
    }

    .third-box {
        width: 100%;
        height: 96px;
        display: flex;
        justify-content: space-between;
        z-index: 1
    }

    .box-9 {
        width: 25%;
        height: 100%;
        background: rgb(255,219,71);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .box-9 span:first-child {
        font-weight: bold;
        font-size: 16px;
    }
    .box-9 span:last-child {
        font-size: 14px;
    }
    .fourth-box {
        width: 100%;
        height: 50px;
        padding: 8px 13px 8px 11px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        background: #fff;
        z-index: 2;
        position: relative;
        top: -15px;
        border-radius: 8px;
    }

    .fourth-1 {
        width: 50px;
        height: 33px;
    }
    .fourth-1 img {
        width: 100%;
        height: 100%;
    }
    .fourth-2 {
        width: 230px;
    }

    .main-box {
        background: rgb(240,240,240);
        padding: 0 15px;
    }

    .fourth-box-2 {
        width: 100%;
        height: 140px;
        padding: 13px;
        background: #fff;
        border-radius: 8px;
    }
    .fourth-box-3 {
        display: flex;
        justify-content: space-between
    }
    .box-3-1 {
        color: #222;
        font-size: 16px;
        font-weight: bolder;
    }
    .box-3-2 {
        color: #666;
        font-size: 14px;
    }
    .new-module {
        display: flex;
        justify-content: space-between;
        height: 97px;
        width: 100%;
        align-items: center;
    }
    .new-modulr-s {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }
    .div-once {
        margin-bottom: 8px;
    }
    .server {
        width: 100%;
        height: 208px;
        margin-top: 10px;
        padding: 13px;
        background: #fff;
        border-radius: 8px;
    }
    .server-1 {
        font-size: 17px;
        color: #222;
        font-weight: bold;
    }
    .sn-server {
        display: flex;
        flex-wrap: wrap;
    }

    .sn-img {
        width: 26px;
        height: 26px;
    }
    .sn-img img {
        width: 100%;
        height: 100%
    }
    .sn-1 {
        width: 25%;
        height: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
    }
    .charuzhi {
        width: 100%;
        height: 23px;
        display: flex;
        justify-content: center;
        margin: 10px 0;
        align-items: center;
    }
    .bg-one {
        width: 30px;
        height: 8px;
        margin-right: 10px;
    }
    .bg-one img{
        width: 100%;
        height: 100%;
    }
    .bg-two {
        font-size: 17px;
        color: #222;
        font-weight: bold;
    }
    .bg-three {
        width: 30px;
        height: 8px;
        margin-left: 10px;
    }
    .bg-three img{
        width: 100%;
        height: 100%;
    }
    .mabe-last-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .guestLike {
        width: 48%;
        height: 280px;
        background: url("https://res.suning.cn/project/msinode/wap/home/image/newMy-show.png") no-repeat;
        background-size: cover;
    }

    .meiyong {
        height: 65px;
    }
    .youdianyong {
        display: flex;
        margin-top: 15px;
    }
    .img-1 {
        width: 80px;
        height: 80px;
        margin-left: 20px;
        margin-right: 20px;

    }
    .img-2 {
        width: 55px;
        height: 55px;
    }
    .img-4 {
        width: 58px;
        height: 58px;
        margin-left: 100px;
        
    }
    .img-1 img,.img-2 img,.img-4 img {
        width: 100%;
        height: 100%
    }
    .box-li {
        width: 48%;
        height: 280px;
        border-radius: 8px;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box-li-img {
        width: 188px;
        height: 188px;
    }

    .box-li-img img {
        width: 100%;
        height: 100%;;
    }

    .box-li-container {
        color: #222;
        width: 90%;
        font-size: 14px;
        font-weight: bold;
        height: 42px;
        overflow: hidden;
        text-overflow:ellipsis;
        /* white-space: nowrap; */
    }
    .box-li-bottom {
        margin-top: 20px;
        width: 100%;
        color: #FF4422;
        padding-left: 10px;

    }
    .box-li-bottom span:nth-child(1){
        font-size: 12px;
    }
    .box-li-bottom span:nth-child(2){
        font-size: 16px;
        font-weight: bold;
    }
    .box-li-bottom span:nth-child(3){
        font-size: 14px;
    }









</style>