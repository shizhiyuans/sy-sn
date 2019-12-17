<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div>
        <a href="https://code.suning.cn/5sWP9h" class="fixedd">
            <img src="https://image2.suning.cn/uimg/cms/img/152853499252671742.png" alt="">
        </a>
        <div class="title">
            <div class="head-flex"><img src="https://image2.suning.cn/uimg/cms/img/157199320847433454.png" alt=""></div>
            <div class="title-img"><img src="https://image3.suning.cn/uimg/cms/img/157623112045989921.gif" alt=""></div>
            <div class="head-flex"><img src="https://image1.suning.cn/uimg/cms/img/157199321817918653.png" alt=""></div>
        </div>
        <a class="title-wrap" href="//m.suning.com/search.html?defaultWord=手机满千减百">
            <div class="box-input">
                <span class="iconfont icon-fangdajing"></span>
                <span class="ziyuansu">手机满千减百</span>
            </div>
        </a>
        <div class=" three-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="//oss.suning.com/aps/aps_learning/iwogh/2019/12/13/20/iwoghBannerPicture/48533f26f923408bb9253ca101b6e092.png?format=_is_1242w_610h" alt=""></div>
                <div class="swiper-slide"><img src="//image.suning.cn/uimg/aps/material/157613996252153775.jpg?format=_is_1242w_610h" alt=""></div>
                <div class="swiper-slide"><img src="https://image2.suning.cn/uimg/cms/img/157622500164401879.jpg?format=_is_1242w_610h" alt=""></div>
                </div>
                <div class="swiper-pagination">111</div>
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
       
        
        <div class="fourth">
            <myCompon></myCompon>
        </div>

        <div class="five-container">
            <a href="https://snvip.m.suning.com/newmem.html?bizCode=140000000010" class="five-1">
                <img src="https://image3.suning.cn/uimg/cms/img/157330223943814123.png" alt="">
            </a>
            <a href="https://cuxiao.m.suning.com/scms/syxrl.html"  class="five-2">
                <img src="https://image3.suning.cn/uimg/cms/img/157330224785306243.gif" alt="">
            </a>
            <a href="https://cuxiao.m.suning.com/scms/syxrl.html"  class="five-3">
                <img src="https://image3.suning.cn/uimg/cms/img/157330227372982455.gif" alt="">
            </a>
        </div>
        <div class="six-container">
            <div class="six-container">
                <div class="six-one">
                    <div class="six-title">
                        <div class="six-font">限时抢购</div>
                        <div class="six-num">
                            <span class="yanse">01</span>
                            <span>:</span>
                            <span class="yanse">09</span>
                            <span>:</span>
                            <span class="yanse">22</span>
                        </div>
                    </div>
                    <div class="mordern">潮流好物限时抢</div>
                    <div class="nianzhong">
                        <div class="suiyi">
                            <div class="suiyi-img"><img src="//image3.suning.cn/uimg/nmps/MBLSPZT/100396761141622920picH_1_370x370.jpg" alt=""></div>
                            <div>￥2.6</div>
                        </div>
                        <div class="suiyi">
                            <div class="suiyi-img"><img src="//image1.suning.cn/uimg/nmps/MBLSPZT/100388163142339691picH_1_370x370.jpg" alt=""></div>
                            <div>￥9.9</div>
                        </div>
                    </div>
                </div>
                <div class="six-two"></div>
            </div>
            
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import myCompon from "./home-1.vue"
    export default {
            data(){
            return {}
        },
        components: {
            myCompon
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            console.log(mySwiper);
        }
    }
</script>

<style scoped>
    .swiper-container {
        height: 300px;
    }
    a {
        color: #333
    }
    .title {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(30,65,195);
        color: white;
        padding: 0 20px
    }
    .title-img {
        width: 250px;
        height: 30px;
    }
    .title-img  img {
        width: 100%;
        height: 100%
    }
    .head-flex {
        width: 20px;
        height: 30px
    }
    .head-flex img {
        width: 100%;
        height: 100%
    }
    .title-wrap {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        background: rgb(30,65,195);
        display: flex;
        align-items: center;
    }
    .box-input {
        width: 100%;
        height: 40px;
        border-radius: 25px;
        background: rgb(210,217,243);
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #999;
    }
    .changesize {
        font-size: 22px
    }

    .ziyuansu {
        margin-left: 10px;
        font-size: 14px
    }
    .three-box {
        width: 100%;
        height: 145px;
        background: url(https://image1.suning.cn/uimg/cms/img/157622774678064344.png) no-repeat;;
        background-size: cover;

    }

    .fourth {
        margin-top: 10px
    }

    .five-container {
        width: 100%;
        height: 150px;
        padding: 10px 10px;
        background: rgb(240,240,240);
        display: flex;
        justify-content: space-between
    }

    .five-1 {
        width: 49%;
        height: 100%
    }
    .five-2 {
        width: 25%;
        height: 100%
    }

    .five-3 {
        width: 25%;
        height: 100%
    }
    .five-1 img,.five-2 img, .five-3 img {
        width: 100%;
        height: 100%;
    }

    .fixedd {
        width: 55px;
        height: 80px;
        position: fixed;
        right: 10px;
        bottom: 200px
    }

    .fixedd img {
        width: 100%;
        height: 100%;
    }

    .six-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px
    }

    .six-container>.six-one {
        width: 50%;
        height: 143px;
        border-right: 1px solid #ccc;
        padding-left: 20px
    }

    .six-title {
        display: flex;
        align-items: center;

    }

    .six-font {
        font-size: 18px ;
        color: #333;
        font-weight: bold;
        margin-right: 15px

    }


    .six-num {
        display: flex;
    }

    .yanse {
        background-color: rgb(255,204,0);
        border-radius: 3px
    }
    .mordern {
        color: #999;
        font-size: 14px
    }
    .nianzhong {
        display: flex;
        width: 100%;
        height: 80px;
        justify-content: space-between;
    }
    .nianzhong .suiyi {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center
    }

    .nianzhong .suiyi .suiyi-img {
        width: 66px;
        height: 66px;
    }
    .nianzhong .suiyi .suiyi-img img{
        width: 100%;
        height: 100%;
    }
    .swiper-container {
        width: 90%;
        height: 150px;
        overflow: hidden;
        border-radius: 10px;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination {
        z-index: 99
    }


















</style>