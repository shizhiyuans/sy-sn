<template>
    <div class="container">
        <div class="big-img">
            <img :src="this.$store.state.obj.images" alt="">
            <div @click="goFUn" class="iconfont icon-ziyuan postiongs"></div>
        </div>
        <div class="big-second">
            <div class="product">
                <span class="product-color">￥</span>
                <span class="product-color">{{this.$store.state.obj.price1}}</span>
                <span class="product-color">{{this.$store.state.obj.price2}}</span>
                <span class="zuihouwoye">￥71.40</span>
            </div>
            <div class="VIP-mode">
                <div class="VIP-1">
                    <p>SUPER会员预计返价值1.38元云钻</p>
                    <p>盛典加磅！300减220零食券限量抢→</p>
                </div>
                <div class="VIP-2">戳我领券</div>
            </div>
            <div class="product-title">
                <div class="product-title-1">
                    <span>{{this.$store.state.obj.title2}}</span>
                    <span>飞利浦(Philips) 电吹风HP8120 小巧易携带 1200W轻柔吹干 3档可调风速冷热风护发 恒温护发</span>
                </div>
                <div class="product-title-2">
                    <span class="iconfont icon-guanzhu"></span>
                    <span>关注</span>
                </div>
            </div>
            <div class="subp">
                <span>恒温护发可折叠手柄，1200w功率，三档风速调节，适合枯燥发质！让呵护秀发变得简单！</span><a href="#">圣诞礼遇，礼盒低至399元！人气新品赠千元大礼！戳</a>
            </div>
            <div class="fourth-cell">
                <span><span class="iconfont icon-lipin"></span> 实名认证领新人礼包</span>
                <span><span>立即领取</span><span class="iconfont icon-you"></span></span>
            </div>
        </div>
        <div class="big-container">
            <div class="bt-cell">
                <span>榜单</span>
                <span>此商品已入选『十款匀热快速干发的电吹风精选』</span>
                <span class="iconfont icon-you"></span>
            </div>
            <div class="info-item">
                <div class="info-one">优惠</div>
                <div class="info-two">
                    <p>可参加以下优惠活动</p>
                    <p><span class="info-two-1">云钻促销</span><span>普通会员立返20云钻</span></p>
                    <p><span class="info-two-1">实名领券</span><span>实名认证领10元支付券</span></p>
                </div>
                <div class="info-three"><span>查看</span><span class="iconfont icon-you"></span></div>
            </div>
            <div class="fourth-cell">
                <span>
                    <span>已选</span>
                    <span class="xiaoqiaoyixie"> 小巧易携 1件</span>
                </span>
                <span class="iconfont icon-you"></span>
            </div>
            <div class="evalute">
                <div class="evalute-1">送至</div>
                <div class="evalute-2">
                    <p>
                        <span>江苏</span>
                        <span>苏州</span>
                        <span>吴中区</span>
                        <span>全区</span>
                    </p>
                    <p>现货，23:00前付款，预计明天（12月26日）前送达</p>
                </div>
                <div class="iconfont icon-you evalute-3"></div>
            </div>
            <div class="weightDiv">
                <span>
                    <span class="weitht-1">重量</span>
                    <span class="weitht-2">0.385kg</span>
                </span>
                <span class="iconfont icon-you"></span>
            </div>
            <div class="Support">
                <span class="Support-1">付款</span>
                <span class="Support-2">支持</span>
                <span class="Support-2">易付款</span>
                <span class="Support-2">支付宝</span>
            </div>
            <div class="trigger">
                <div class="tigger">
                    <p>
                        <span><span class="iconfont icon-gou"></span><span>苏宁发货</span></span>
                        <span><span class="iconfont icon-gou"></span><span>准时达</span></span>
                        <span><span class="iconfont icon-gou"></span><span>次日达</span></span>
                        <span><span class="iconfont icon-gou"></span><span>自提</span></span>
                    </p>
                    <p>
                        <span><span class="iconfont icon-gou"></span><span>运费5元，满86元免基础运费（50.00kg内）</span></span>
                        <span><span class="iconfont icon-gou"></span><span>商品保管说明</span></span>
                    </p>
                    <p>
                        <span><span class="iconfont icon-gou"></span><span>30天包退</span></span>
                        <span><span class="iconfont icon-gou"></span><span>365天包换</span></span>
                        <span><span class="iconfont icon-gou"></span><span>7天无理由退货</span></span>
                    </p>
                </div>
                <div class="iconfont icon-you"></div>
            </div>
            <div class="title-fourth">
                <span class="title-fourth-four">评价(3.0万+)</span>
                <span><span>99%好评率</span><span class="iconfont icon-you"></span></span>
            </div>
            <div class="item-box">
                <div class="name-time">
                    <div class="name-time-1">
                        <div class="name-time-11">
                            <img src="//image.suning.cn/uimg/cmf/cust_headpic/0000000000_26_60x60.jpg" alt="">
                        </div>
                        <div class="name-time-22">1231341</div>
                        <div class="name-time-33"></div>
                    </div>
                    <div class="start-wu"></div>
                </div>
                <div>不错</div>
                <div class="pics-lazying">
                    <div class="pics-cs">
                        <img src="//image2.suning.cn/uimg/ZR/share_order/157511063883645112_100x100.jpg" alt="">
                    </div>
                    <div class="pics-cs">
                        <img src="//image2.suning.cn/uimg/ZR/share_order/157511063889137213_100x100.jpg" alt="">
                    </div>
                    <div class="pics-cs">
                        <img src="//image2.suning.cn/uimg/ZR/share_order/157511063843374866_100x100.jpg" alt="">
                    </div>
                    <div class="pics-cs">
                        <img src="//image2.suning.cn/uimg/ZR/share_order/157511063885628353_100x100.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="oversea-shop">
                <div class="shuip-1"><img src="//image.suning.cn/uimg/cshop/logo/000000000030000180.jpg?1539313535433" alt=""></div>
                <div class="shuip-2">飞利浦电器苏宁自营旗舰店 </div>
                <div class="shuip-3">进店逛逛</div>
            
            </div>
            <div class="primary">
                <div class="primaty-1 prmsu">图文详情</div>
                <div class="primaty-1">规格参数</div>
                <div class="primaty-1">包装售后</div>
            </div>
            <div class="last-img-1">
                <img src="//uimgproxy.suning.cn/uimg1/sop/commodity/tAK7Lm2UWDI7LaosE1i_qw.jpg?from=mobile" alt="">
            </div>
            <div class="last-img-2">
                <img src="https://image.suning.cn/uimg/sop/richtext/141157287147372250313605.gif" alt="">
            </div>
            <div class="last-img-3">
                <img src="//uimgproxy.suning.cn/uimg1/sop/commodity/QVP7SEt-jJsDH_MPIH_d9w.jpg?from=mobile" alt="">
            </div>
        </div>

        <div class="fixed-fix">
            <div class="fix-day"><span class="iconfont icon-kefu"></span><span>客服</span></div>
            <div class="fix-day"><span class="iconfont icon-dianpu"></span><span>店铺</span></div>
            <div class="fix-day xiaojiba">
                <span class="iconfont icon-gouwuche1"></span><span>购物车</span>
                <span class="bianhua">{{this.$store.state.num}}</span>
            </div>
            <div @click="xianshi" class="buynoW-1">立即购买</div>
            <div @click="xianshi"  class="buynoW-2">加入购物车</div>
        </div>
        <div class="zhezhaoceng">
            <div class="zhezhao-container">
                <div class="cover-head">
                    <div class="cover-img">
                        <img :src="this.$store.state.obj.images" alt="">
                    </div>
                    <div class="cover-main">
                        <p class="cover-main-1"><span>￥</span><span>{{this.$store.state.obj.price1}}</span><span>{{this.$store.state.obj.price2}}</span></p>
                        <p class="cover-main-2">商品编码:107025567</p>
                        <p class="cover-main-3">飞利浦(Philips) 电吹风HP8120 小巧易携带 1200W轻柔吹干 3档可调风速冷热风护发 恒温护发</p>
                    </div>
                    <div @click="quxiao" class="iconfont icon-chacha">
                    </div>
                </div>
                <div class="scroll-box">
                    <div class="Colorname">
                        <div class="title-name">
                            属性
                        </div>
                        <div class="ColorItemList">
                            <div class="ColorItemList-1" v-for="(item,index) in list" :key="index">
                                <div class="ColorItemList-img">
                                    <img :src="item.img" alt="">
                                </div>
                                <span>{{item.name}}</span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="Number">
                        <div class="Number-1">数量</div>
                        <div class="Number-2">
                            <span @click="jianshao" class="Number-span-1">-</span>
                            <span class="Number-span-2">{{this.$store.state.linshinum}}</span>
                            <span @click="zengjia"  class="Number-span-3">+</span>
                        </div>
                    </div>
                    <div class="fout-cells">
                        购买增值服务
                    </div>
                </div>
                <div class="overa-action">
                    <div @click="cunchu" class="overa-action-1">立即购买</div>
                    <div @click="jiarugouwuche" class="overa-action-2">加入购物车</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            list:[
                {
                    img:"//imgservice.suning.cn/uimg1/b2c/image/9ywmCZecb9whxLrCL2EiNA.jpg_50w_50h_4e_100Q",
                    name:" SPA柔护 "
                },
                {
                    img:"//imgservice.suning.cn/uimg1/b2c/image/SBRS233p929DmIXQkj6J5w.jpg_50w_50h_4e_100Q",
                    name:" 六档控温 "
                },
                {
                    img:"//imgservice.suning.cn/uimg1/b2c/image/D_mbSLeIHsW-F0aQLsbTvw.jpg_50w_50h_4e_100Q",
                    name:" 小巧易携 "
                },
                {
                    img:"//imgservice.suning.cn/uimg1/b2c/image/D_mbSLeIHsW-F0aQLsbTvw.jpg_50w_50h_4e_100Q",
                    name:" 恒温护发 "
                },
                {
                    img:"//imgservice.suning.cn/uimg1/b2c/image/OIqBiFxlRdPn_IkdJSg5qQ.jpg_50w_50h_4e_100Q",
                    name:" 负离子养护 "
                },
                {
                    img:"//imgservice.suning.cn/uimg1/b2c/image/jx0RnJTPcV7xSirASfbkjg.jpg_50w_50h_4e_100Q",
                    name:" 过热保护 "
                }
            ]
        }
    },
    methods: {
        goFUn(){
            window.history.go(-1)
        },
        quxiao(){
            document.querySelector('.zhezhaoceng').style.display = "none"
        },
        xianshi(){
            document.querySelector('.zhezhaoceng').style.display = "block"
        },
        zengjia(){
            this.$store.commit("zengjia");
        },
        jianshao(){
            this.$store.commit("jianshao")
        },
        cunchu(){
            this.$store.commit("cunzhu");
            document.querySelector('.zhezhaoceng').style.display = "none"
        },
        jiarugouwuche(){
            this.$store.commit("jiarugouwuche");
            document.querySelector('.zhezhaoceng').style.display = "none"

        }
    }
}
</script>

<style scoped>
    .container {
        width:100%;
        overflow: scroll;
        position: relative;
    }
    .big-img {
        width: 100%;
        height: 414px;
        position: relative;
    }
    .big-img img {
        width: 100%;
        height: 100%;
    }
    .big-second {
        width: 100%;
        height: 295px;
        padding: 12px;
        /* margin-bottom: 10px; */
    }
    .product {
        display: flex;
        width: 100%;
        height: 38px;
        align-items: center;
    }
    .product-color {
        color: #ff4422;
        font-size: 16px;
    }
    .zuihouwoye {
        font-size: 14px;
        color: #999;
        text-decoration: line-through;
        margin-left: 10px;
    }
    .product-color:nth-child(2){
        font-size: 24px;
    }
    .VIP-mode {
        width: 100%;
        height: 59px;
        color: #333;
        background: #F6F6F6;
        margin: 0 0 10px;
        padding: 5px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .VIP-1 p:first-child{
        color: #222;
        font-size: 14px;
        font-weight: bold;
        margin-left: 15px;
    }
    .VIP-1 p:last-child{
        color: #222;
        font-size: 13px;
    }
    .VIP-2 {
        font-size: 13px;
        font-weight: bold;
        color: #222;
    }
    .product-title {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
    }
    .product-title-1 {
        width: 360px;
        height: 72px;
        margin: 0 0 8px;
        padding: 0 10px 0 0;

    }

    
    .product-title-1 span:first-child {
        color: #222;
        font-size: 12px;
        font-weight:bold;
        background: #ffcc00;
        padding: 0 3px;
        border-radius: 3px;
        margin-right: 8px;
    }

    .product-title-1 span:last-child {
        color: #222;
        font-size: 16px;
        font-weight:bold;
    }

    .product-title-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #222;
        font-weight: bold;
    }
    .subp {
        width: 100%;
        height: 54px;

    }
    .subp span {
        color: #999;
        font-size: 13px;
    }
    .subp a {
        color:#ff4422;
        text-decoration: underline;
    }
    .fourth-cell {
        width: 100%;
        height: 41px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background: #fff;
    }

    .fourth-cell span {
        font-size: 14px;
        color: #222;
    }

    .big-container {
        width: 100%;
        background: rgb(240,240,240);
        padding-top: 10px;
    }
    .bt-cell {
        width: 100%;
        height: 41px;
        padding: 10px;
        background: #fff;
        display: flex;
        justify-content: space-between;
    }
    .postiongs {
        position: absolute;
        top: 20px;
        left: 30px;
        width: 30px;
        height: 30px;
        font-size: 26px;;
    }
    .info-item {
        width: 100%;
        height: 95px;
        margin-top: 9px;
        padding: 9px 10px 9px 10px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        margin-bottom: 10px;
    }

    .info-one {
        width: 40px;
        text-align: center;
        flex-shrink: 0
    }
    .info-two {
        flex-grow: 1;
        width: 40px;
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info-three {
        width: 80px;
        text-align: right;
        flex-shrink: 0;

    }
    .info-two-1 {
        width: 56px;
        height: 16px;
        background: #fefbee;
        font-size: 12px;
        padding: 1px 3px;
        margin-right: 10px;
        border: 1px solid #fb0;
        border-radius: 6px;
    }
    .xiaoqiaoyixie {
        font-size: 14px;
        color: #222;
        font-weight: bold;
    }
    .evalute {
        width: 100%;
        height: 60px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        align-items: center;
    }

    .evalute-2 {
        flex-grow: 1;
        padding: 0 15px;
    }

    .evalute-2 p span {
        margin-right: 10px;
        font-size: 14px;
        color: #222;
    }
    .weightDiv {
        width: 100%;
        height: 41px;
        padding: 10px;
        background: #fff;
        display: flex;
        justify-content: space-between;
    }
    .weitht-1 {
        color: #999;
        font-size: 13px;
    }

    .weitht-2 {
        color: #222;
        font-size: 14px;
        margin-left: 10px;
    }

    .Support {
        width: 100%;
        height: 41px;
        padding: 10px;
        font-size: 12px;
        color: #222;
        display: flex;
        background: #fff;
        align-items: center;
    }
    .Support-1 {
        color: #999;
        font-size: 13px;
    }
    .Support-2 {
        color: #222;
        font-size: 14px;
        margin-left: 10px;
    }

    .trigger {
        width: 100%;
        height: 92px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background: #fff
    }

    .tigger {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .icon-gou {
        color: #fb0;
        margin-left: 5px;
    }
    .title-fourth {
        width: 100%;
        height: 41px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }
    .item-box {
        width: 100%;
        height: 183px;
        padding: 12px 0;
        background: #fff;
        padding: 10px;
    }
    .name-time {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: space-between;
    }
    .title-fourth-four{
        font-weight:bold;margin-left:10px;font-size:14px
    }
    .start-wu {
        width: 72px;
        height: 12px;
        background: url(https://res.suning.cn/project/pdsWeb/wapV3/style/images/newwap/sn-high-star.png) no-repeat 0 0;
        background-size: 72px 12px;
    }
    .name-time-1 {
        display: flex;
        align-items: center;

    }
    .name-time-11 {
        width: 25px;
        height: 25px;
    }
    .name-time-11 img{
        width: 100%;
        height: 100%;
    }
    .name-time-22 {
        margin: 0 5px;
    }
    .name-time-33 {
        width: 39px;
        height: 10px;
        background: url(https://res.suning.cn/project/pdsWeb/wapV3/style/images/super-eval.gif) no-repeat;
        background-size: 39px 10px;
    }
    .pics-lazying {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
    }
    .pics-cs {
        width: 24%;
        height: 100%;
        border-radius: 8px;
    }
    .pics-cs img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    .oversea-shop {
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-between;
        padding:  10px;
        background: #fff;
        margin-top: 10px;
        align-items: center;
    }
    .shuip-1 {
        width: 60px;
        height: 60px;
    }
    .shuip-1 img{
        width: 100%;
        height: 100%;
    }
    .shuip-2 {
        flex-grow: 1;
        color: #333;
        font-size: 14px;
        font-weight: bold;
    }
    .shuip-3 {
        width: 86px;
        height: 27px;
        background: #ffcc00;
        border-radius: 8px;
        text-align: center;
        line-height: 27px;;
    }
    .primary {
        width: 100%;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    .primaty-1 {
        color: #222;
        font-size: 14px;
        margin-right: 10px;
    }
    .prmsu {
        color: #000;
        font-weight: bold

    }
    .last-img-1 {
        width: 100%;
        height: 110px;
    }
    .last-img-2 {
        width: 100%;
        height: 386px;
    }
    .last-img-3 {
        width: 100%;
        height: 589px;
    }   

    .last-img-1 img,.last-img-2 img,.last-img-3 img{
        width: 100%;
        height: 100%;;
    }

    .fixed-fix {
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 0;
        background: #fff;
        align-items: center;
    }
    .fix-day {
        width: 51px;
        height: 50px;
        margin: 0 7px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .xiaojiba {
        position: relative;
    }

    .bianhua {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background:#ff4422;
        position: absolute;
        top: 0;
        text-align: center;
        right: 0;
        line-height: 20px;
        color:white
    }

    .buynoW-1{
        width: 105px;
        height: 35px;
        background: #ffcc00;
        margin-right: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 35px
    }

    .buynoW-2{
        width: 105px;
        height: 35px;
        background: #ff6600;
        color: white;
        font-size: 14px;
        text-align: center;
        line-height: 35px
    }

    .zhezhaoceng {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        position: absolute;
        top: 0;
        padding: 0 1%;
        display: none;
    }
    .zhezhao-container {
        width: 98%;
        height: 400px;
        background: #fff;
        position: fixed;
        bottom: 5px;
        border-radius: 8px;
        /* overflow: scroll */
    }
    .cover-head {
        width: 100%;
        height: 132px;
        padding: 10px 14px 0;
        position: relative;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee

    }
    .scroll-box {
        overflow: scroll;
        height: 100%;
    }
    .cover-img {
        width: 112px;
        height: 112px;
        position: absolute;
        top: -20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        z-index: 99;
    }
    .cover-img img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    .icon-chacha {
        font-size: 20px;
        font-weight: bold;
    }
    .cover-main {
        flex-grow: 1;
        padding-left: 120px;
    }
    .cover-main-1 {
        color: #ff4422;
    }
    .cover-main-1 span {
        font-size: 14px;
    }
    .cover-main-2 {
        color: #999;
    }
    .cover-main-3 {
        color: #222;
        font-size: 12px;
    }
    .Colorname {
        width: 100%;
        height: 130px;
        padding: 12px 10px;
        border-bottom: 1px solid #eee
    }
    .title-name {
        width: 28px;
        height: 21px;
        color: #222;font-size: 14px;
    }
    .ColorItemList {
        width: 100%;
        height: 85px;
        display: flex;
        flex-wrap: wrap;
    }
    .ColorItemList-img {
        width: 24px;
        height: 24px;

    }
    .ColorItemList-img img{
        width: 100%;
        height: 100%;
    }
    .ColorItemList-1 {
        width: 91px;
        height: 30px;
        display: flex;
        align-items: center;;
        margin: 12px 12px 0 0;
        padding: 2px 4px;
        background: #F6F6F6;
    }
    .Number {
        width: 100%;
        height: 50px;
        padding: 12px 10px;
        display: flex;
        justify-content: space-between;
    }
    .Number-1 {
        font-size: 14px;
        color: #222;
    }
    .Number-2 {
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

    .fout-cells {
        width: 100%;
        height: 41px;
        color: #222;
        padding: 10px;
        font-weight: bold;
    }
    .overa-action {
        width: 100%;
        height: 35px;
        display: flex;
        position: fixed;
        bottom: 10px;
        padding: 0 15px;
    }

    .overa-action-1{
        width: 48%;
        height: 35px;
        background: #ffcc00;
        margin-right: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

    }

    .overa-action-2{
        width: 48%;
        height: 35px;
        background: #ff6600;
        color: white;
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }












































</style>