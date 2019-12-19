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
                    images:"//imgservice.suning.cn/uimg1/b2c/atmosphere/YZtn5ROk8QJVjdDU9zhfQQ.jpg?format=_is_300w_300h_4e.webp",
                    title1:"南极人(NanJiren)家纺 简约全棉四件套床上用品纯棉斜纹双人被套床单式4件套1.51.8m床 思羽情怀灰 1.5m/1.8m床通用(被套200*230cm)",
                    title2:"自营",
                    price1:"129",
                    price2:".9",
                    pingjia:"2.4万+评价",
                },
                {
                    images:"//imgservice.suning.cn/uimg1/b2c/image/Ft3qfOcqOUjM8oHuneepAQ.jpg?format=_is_300w_300h_4e.webp",
                    title1:"虎牌（tiger）保温杯 MMJ-A48C 480ml 藏蓝色KA 一键开启弹盖杯 轻量时尚水杯 保温保冷杯子 藏蓝色",
                    title2:"自营",
                    price1:"192",
                    price2:"",
                    pingjia:"100+评价",
                },
                {
                    images:"//imgservice.suning.cn/uimg1/b2c/image/04CRPBqTXpK38VL1xeQNww.jpg?format=_is_300w_300h_4e.webp",
                    title1:"苹果(Apple) iPhone 11 128GB 黑色 移动联通电信4G全网通手机 双卡双待",
                    title2:"自营",
                    price1:"5688",
                    price2:"",
                    pingjia:"400+评价"
                },
                {
                    images:"//imgservice.suning.cn/uimg1/b2c/image/-rGu6nblFMvmPuN7coB8ZA.jpg?format=_is_300w_300h_4e.webp",
                    title1:"稻可道 粳米 东北大米 东北珍珠米 5KG",
                    title2:"自营",
                    price1:"24",
                    price2:".9",
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
        padding-bottom: 5px;
        overflow: hidden;
    }

    .box-image {
        width: 100%;
        height: 189px;;
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
    .dapp>span:first-child {
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