<template>
    <div>
        <div class="houguangxin">
            <a class="hou" v-for="(item,index) in lists" :key="index">
                <div class="guang">
                    <span class="hou-1">{{item.name1}}</span>
                    <span class="hou-2">{{item.name2}}</span>
                </div>
                <div class="hou-3">{{item.name3}}</div>
                <div class="xin">
                    <div class="xin-1"><img :src="item.image1" alt=""></div>
                    <div class="xin-1"><img :src="item.image2" alt=""></div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
        data(){
        return {
            lists:[
                {
                    name1:"营养滋补榜",
                    name2:"人气榜",
                    name3:"卖爆2.2万件",
                    image1:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010840691312.jpg?format=_is_200w_200h_4e.webp",
                    image2:"//imgservice.suning.cn/uimg1/sniss/improve/RR6N7_aoWJpmJlhl3UFiHw.jpg?format=_is_200w_200h_4e.webp",
                },
                {
                    name1:"人气智能电视机",
                    name2:"人气榜",
                    name3:"卖爆9498万件",
                    image1:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010557227708.jpg?format=_is_200w_200h_4e.webp",
                    image2:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000793445341.jpg?format=_is_200w_200h_4e.webp",
                },
                {
                    name1:"男士羽绒保暖榜",
                    name2:"人气榜",
                    name3:"今日热销爆款",
                    image1:"//imgservice.suning.cn/uimg1/sniss/improve/qr1scZA-jKlpn2iNW725UA.jpg?format=_is_200w_200h_4e.webp",
                    image2:"//imgservice.suning.cn/uimg1/sniss/improve/avD_X4MDyrkiIFBVZRSczQ.jpg?format=_is_200w_200h_4e.webp",
                },
                {
                    name1:"家用电饭煲榜",
                    name2:"人气榜",
                    name3:"卖爆4177件",
                    image1:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000126612845.jpg?format=_is_200w_200h_4e.webp",
                    image2:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010583309295.jpg?format=_is_200w_200h_4e.webp",
                },

            ]
        }
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box
    }
    .houguangxin {
        width: calc(100% - 40px);
        margin: 0 auto;
        height: 264px;
        display: flex;
        flex-wrap: wrap;
        border-radius: 15px;
        background: #fff
    }
    .houguangxin .hou {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        padding: 12px 10px 9px
    }
    .guang {
        display: flex;
        align-items: center;
    }
    .hou-1 {
        height: 18px;
        color: #333;
        font-size: 14px;
        font-weight: bold;
        margin-right: 12px;
    }

    .hou-2 {
        width: 50px;
        height: 16px;
        border-radius: 8px;
        color: #AB813A;
        background: #F9F5EE;
        text-align: center
    }

    .hou-3 {
        color: #999;
        font-size: 14px;

    }

    .xin {
        display: flex;
        justify-content: space-between
    }

    .xin-1 {
        width: 77px;
        height: 77px;
    }
    .xin-1 img {
        width: 100%;
        height: 100%;;
    }
    .hou:nth-child(1) {
        border-bottom: 1px solid #eee
    }
    .hou:nth-child(2n) {
        border-left: 1px solid #eee;
    }
        .hou:nth-child(2) {
        border-bottom: 1px solid #eee
    }




</style>