<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
        <div class="six-container">
            <a href="https://c.m.suning.com/channel/newZsq.html" class="six-one">
                <div class="six-title">
                    <div class="six-font">限时抢购</div>
                    <div class="six-num">
                            <p class="yanse">{{h}}</p>
                            <p>:</p>
                            <p class="yanse">{{m}}</p>
                            <p>:</p>
                            <p class="yanse">{{s}}</p>
                    </div>
                </div>
                <div class="mordern">潮流好物限时抢</div>
                <div class="nianzhong">
                    <div class="suiyi">
                        <div class="suiyi-img"><img src="//image3.suning.cn/uimg/nmps/MBLSPZT/100396761141622920picH_1_370x370.jpg" alt=""></div>
                        <div class="didi">￥2.6</div>
                    </div>
                    <div class="suiyi">
                        <div class="suiyi-img"><img src="//image1.suning.cn/uimg/nmps/MBLSPZT/100388163142339691picH_1_370x370.jpg" alt=""></div>
                        <div class="didi">￥9.9</div>
                    </div>
                </div>
            </a>
                
            <a :href="item.addres" class="six-two" v-for="(item,index) in list" :key='index'>
                <div class="first">{{item.title1}}</div>
                <div class="first-1">{{item.title2}}</div>
                <div class="first-2">
                    <div class="first-3">
                        <div class="first-4"><img :src="item.images1" alt=""></div>
                        <div class="qingfeng">{{item.name1}}</div>
                    </div>
                    <div class="first-3">
                        <div class="first-4"><img :src="item.images2" alt=""></div>
                        <div class="qingfeng">{{item.name2}}</div>
                    </div>
                </div>
            </a>
        </div>
       
        
</template>
<script>
export default {
        data(){
        return {
            d: '',
            h: '',
            m: '',
            s: '',
            str:"0",
            list:[
        {
            title1:"大聚会",
            title2:"好货一元秒",
            images1:"https://image3.suning.cn/uimg/cms/img/157339041898118122.jpg?format=_is_200w_200h.webp",
            name1:"清风",
            images2:"https://image3.suning.cn/uimg/cms/img/157339041429191121.jpg?format=_is_200w_200h.webp",
            name2:"小米",
            addres:"https://qiang.suning.com/flashSale/m/index.html"
        },
        {
            title1:"苏宁国际",
            title2:"精选全球好物",
            images1:"https://image1.suning.cn/uimg/b2c/qrqm/0070653458000000011224908666_200x200.jpg?ver=2000&from=mobile",
            name1:"假一赔十",
            images2:"https://image3.suning.cn/uimg/b2c/qrqm/0070206966000000010517676820_200x200.jpg?ver=2000&from=mobile",
            name2:"每日抽奖",
            addres:"https://g.m.suning.com/oversea.html?productCode=000000011224908666&vendorId=0070653458&shopCode=0070653458&supplierCode=0070653458&productType=6&productName=COACH%20%E8%94%BB%E9%A9%B0%E8%85%B0%E5%B8%A6%20%E5%95%86%E5%8A%A1%E4%BC%91%E9%97%B2%E7%94%B7%E5%A3%AB%E7%9A%AE%E5%B8%A6%20%E4%B8%83%E5%A4%95%E9%80%81%E7%94%B7%E5%8F%8B&handwork=rec_19-28_0_A&contentId=&promotionInfo=&price=549.00&picVersion=2000&pictureUrl=//imgservice.suning.cn/uimg1/b2c/image/9ExQg0u1GVkBijrH0BBIPQ.jpg&productCode2=000000010788577248&vendorId2=0070220543&shopCode2=0070220543&supplierCode2=0070220543&productType2=6&productName2=Areti%202019%E4%BA%BA%E6%B0%94%E7%A4%BC%E7%9B%92%E5%A5%97%E8%A3%85%20w04IDG%E6%B4%81%E9%9D%A2%E4%BB%AA%20s1808%E5%89%83%E9%A1%BB%E5%88%80%20%E7%94%B7%E5%A3%AB%E6%8A%A4%E7%90%86%E5%A5%97%E8%A3%85%20%E6%B7%B1%E5%B1%82%E6%B8%85%E6%B4%81%20%E5%A3%B0%E6%B3%A2%E9%9C%87%E5%8A%A8%20%E4%BF%9D%E7%A8%8E%E7%9B%B4%E9%82%AE&handwork2=rec_19-28_0_A&contentId2=&promotionInfo2=&price2=399.00&picVersion2=2000&pictureUrl2=//imgservice.suning.cn/uimg1/b2c/image/hZlFkaVfy5i2vyT69seZYQ.jpg"
        },
        {
            title1:"苏宁拼购",
            title2:"2人拼更实惠 全场包邮",
            images1:"//imgservice.suning.cn/uimg1/b2c/image/lVKkMy5ep418eICEtgJXbQ.jpg?from=mobile",
            name1:"2人拼299",
            images2:"//imgservice.suning.cn/uimg1/b2c/image/82LiB9imzEvm2Pi9kSRhdg.jpg?from=mobile",
            name2:"2人拼89",
            addres:"https://c.m.suning.com/group_index.html?adTypeCode=1164&adId=0&sourceFrom=1&sugGoodsCode=000000010955645208&sugGoodsName=%E5%88%9D%E5%B0%94%E5%BE%97(Cuerde)%20%E5%85%BB%E7%94%9F%E5%A3%B6%E5%8A%A0%E5%8E%9A%E9%AB%98%E7%A1%BC%E7%A1%85%E7%8E%BB%E7%92%83%E8%A7%A6%E5%B1%8F%E5%BC%8F%E8%A7%A6%E6%8E%A7%E9%9D%A2%E6%9D%BF%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%85%A8%E8%87%AA%E5%8A%A81.5L%E5%AE%B9%E9%87%8F%E7%87%95%E7%AA%9D%E7%82%96%E7%9B%85%E9%9A%94%E6%B0%B4%E7%82%96%E7%85%8E%E8%8D%AF&shopCode=0070736199&activeId=51173661245175365208&actType=1&cateId=&amount=1&pgPrice=179.00&memberNum=2&orign=2&handwork=rec_C0002_J0002_none_sys:rods,inpo:0,cpn:2,p:2,ab:0,uuid:c624cda0ee0e4be1a61f87e5801d60d7,d:1,dab:0,eds:1_none&sourceFrom=0&sugGoodsCode2=000000011107033279&sugGoodsName2=%E4%B8%AD%E5%85%B4ZTE%20K2%20%E7%BA%A2%E8%89%B2&shopCode2=0000000000&activeId2=51179185950946243279&actTyp2e=1&cateId2=&amount2=1&pgPrice2=158.00&memberNum2=2&orign2=1&handwork2=rec_C0002_J0002_none_sys:rods,inpo:0,cpn:2,p:2,ab:0,uuid:c624cda0ee0e4be1a61f87e5801d60d7,d:1,dab:0,eds:1_none&sourceFrom2=0"
        }
    ]
        }
    },
        created(){
            this.countTime()
        },
        methods:{ 
            countTime: function() {
      //获取当前时间
        var date = new Date()
        var now = date.getTime()
        //设置截止时间
        var endDate = new Date('2020-1-1 00:00:00')
        var end = endDate.getTime()
        //时间差
        var leftTime = end - now
        //定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
            this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)//天数我没用到，暂且写上
            this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
            if(this.h <10) {
                this.h = this.str+this.h
            }
            this.m = Math.floor((leftTime / 1000 / 60) % 60)
            if(this.m <10) {
                this.m = this.str+this.m
            }
            this.s = Math.floor((leftTime / 1000) % 60)
            if(this.s <10) {
                this.s = this.str+this.s
            }
        }
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(this.countTime, 1000)
    },

        },
    
}
</script>

<style scoped>
    *{
        box-sizing: border-box
    }
    a{
        text-decoration: none;
        color: #333
    }
    .six-two {
        width: 50%;
        height: 143px;
        padding: 0 15px;
        
    }
    .first {
        color: #333;
        font-size: 18px;
        font-weight: bold
    }
    .first-1 {
        font-size: 14px;
        color: #999;
    }
    .first-2 {
        display: flex;
    }
    .first-3 {
        display: flex;
        width: 50%;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    .first-4 {
        width: 50%;
        height: 67px;
    }
    .first-4 img {
        width: 100%;
        height: 100%;
    }

    .qingfeng {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 2px 8px;
        box-shadow: 0px -5px 5px #ccc;
        margin-top: 5px

    }
    .six-container {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px;
        margin: 0 auto;
        background: #fff;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
    }

    .six-container>.six-one {
        width: 50%;
        height: 143px;
        border-right: 1px solid #eee;
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
        border-radius: 3px;
        width: 17px;
        height: 17px;
        text-align: center;
        line-height: 17px;
    }
    .mordern {
        color: #999;
        font-size: 14px
    }
    .nianzhong {
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: space-between;
    }
    .nianzhong .suiyi {
        width: 50%;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .cgharu {
        width: 100%;
        height: 115px;
        margin: 10px 0
    }

    .cgharu img{
        width: 100%;
        height: 100%
    }

    .six-two:nth-child(4){
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
    }
    .six-two:nth-child(3) {
        border-right: 1px solid #eee;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee
    }
    .didi {
        margin-top: 10px
    }
</style>