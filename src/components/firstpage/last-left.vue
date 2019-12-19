<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="last-left">
        <div class="box" v-for="(item,index) in list" :key="index">
            <div class="box-image">
                <img :src="item.images" alt="">
            </div>
            <p class="xiaoPP">{{item.title1}}</p>
            <p class="dapp"><span>{{item.title2}}</span></p>
            <div class="quniPP">
                <span class="span-1">￥</span>
                <span class="span-2">{{item.price1}}</span>
                <span class="span-3">{{item.price2}}</span>
                <span class="span-4">{{item.pingjia}}</span>
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
                    images:"//imgservice.suning.cn/uimg1/b2c/image/xqUJtMLxt8bjoM44QFWjeA.jpg?format=_is_300w_300h_4e.webp",
                    title1:"恒大兴安葵花籽橄榄食用植物调和油5L桶装家用天然优质葵花籽",
                    title2:"自营",
                    price1:"49",
                    price2:".9",
                    pingjia:"4600+评价"
                },
                {
                    images:"//imgservice.suning.cn/uimg1/b2c/image/fvcViToSANTX3LnkjZNwaA.jpg?format=_is_300w_300h_4e.webp",
                    title1:"恒大冰泉低钠水 350ml*24 低钠水婴儿水弱碱性天然矿泉水饮用水母婴水瓶装水",
                    title2:"自营",
                    price1:"59",
                    price2:".9",
                    pingjia:"100+评价"
                },
                {
                    images:"//imgservice.suning.cn/uimg1/b2c/image/quqZqe1OkGmtaf0NrMsYeQ.jpg?format=_is_300w_300h_4e.webp",
                    title1:"三元 小方白纯牛奶200ml*24盒",
                    title2:"自营",
                    price1:"56",
                    price2:"",
                    pingjia:"400+评价"
                },
                {
                    images:"//imgservice.suning.cn/uimg1/b2c/image/eEfWjCbIlDlbyidSeMLPQQ.jpg?format=_is_300w_300h_4e.webp",
                    title1:"【新品】Apple二代新款AirPods（配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                    title2:"自营",
                    price1:"1199",
                    price2:"",
                    pingjia:"5.2万+评价"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .box {
        width: 100%;
        background: #fff;
        border-radius: 10px;
        margin-top: 10px;
        overflow: hidden;
        padding-bottom: 5px
    }

    .box-image {
        width: 100%;
        height: 189px;
    }
    .box-image img {
        width: 100%;
        height: 100%
    }
    .xiaoPP {
        width: 100%;
        height: 37px;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        font-size: 14px;
        color: #333;
        padding: 0 5px
    }

    .dapp {
        padding: 0 5px;
        margin: 6px 7px 13px
    }
    .dapp>span {
        background: #FFCC00;
        padding: 2px 3px;
        border-radius: 6px;
    }
    .quniPP {
        width: 100%;
        height: 22px;
        display: flex;
        align-items: center
    }
    .quniPP .span-1 {
        font-size: 14px;
        color: #FF4422
    }

    .quniPP .span-2 {
        font-size: 20px;
        color: #FF4422
    }

    .quniPP .span-3 {
        font-size: 14px;
        color: #FF4422
    }

    .quniPP .span-4 {
        font-size: 12px;
        color: #999;
        margin-left: 5px
    }
</style>