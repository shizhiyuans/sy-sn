<template>
    <div class="fourths">
        <a :href="item.url" v-for="(item,index) in list" :key="index">
                <span class="small-span">
                    <img :src="item.images" alt="">
                </span>
                <span>{{item.name}}</span>
        </a>
    </div>
</template>
<script>
export default {
        data(){
        return {
            list: [
        {
            url: "https://c.m.suning.com/channel/newZsq.html",
            images: "https://image2.suning.cn/uimg/cms/img/157354388821073511.png?format=_is_120w_120h.webp",
            name: "限时抢购"
        },
        {
            url: "https://c.m.suning.com/newcshome.html",
            images: "https://image3.suning.cn/uimg/cms/img/157165889469283916.png?format=_is_120w_120h.webp",
            name: "苏宁超市"
        },
        {
            url: "https://c.m.suning.com/group_index.html",
            images: "https://image1.suning.cn/uimg/cms/img/157165891799364137.png?format=_is_120w_120h.webp",
            name: "苏宁拼购"
        },
        {
            url: "https://c.m.suning.com/phone2019.html",
            images: "https://image3.suning.cn/uimg/cms/img/157165893790085815.png?format=_is_120w_120h.webp",
            name: "爆款手机"
        },
        {
            url: "https://c.m.suning.com/jd_index.html",
            images: "https://image2.suning.cn/uimg/cms/img/157165895671653077.png?format=_is_120w_120h.webp",
            name: "苏宁家电"
        },
        {
            url: "https://c.m.suning.com/newFarm.html#/",
            images: "https://image1.suning.cn/uimg/cms/img/157165897779526702.png?format=_is_120w_120h.webp",
            name: "免费兑好物"
        },
        {
            url: "https://jr.m.suning.com/sfmp/",
            images: "https://image2.suning.cn/uimg/cms/img/154708810364057852.png?format=_is_120w_120h.webp",
            name: "赚钱"
        },
        {
            url: "https://vip.suning.com/m/toIndex.htm",
            images: "https://image1.suning.cn/uimg/cms/img/157165906281444963.png?format=_is_120w_120h.webp",
            name: "签到有礼"
        },
        {
            url: "https://res.m.suning.com/project/coupon/dist/center.html#/type/1",
            images: "https://image1.suning.cn/uimg/cms/img/157165908511134313.png?format=_is_120w_120h.webp",
            name: "领券中心"
        },
        {
            url: "https://c.m.suning.com/channelNSQ.html",
            images: "https://image1.suning.cn/uimg/cms/img/157165912004147386.png?format=_is_120w_120h.webp",
            name: "更多频道"
        },
        ],
        }
    }
}
</script>

<style scoped>
    .fourths {
        width: 100%;
        height: 170px;
        display: flex;
        flex-wrap: wrap;
        
    }

    .fourths a{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #333
    }

    .small-span {
        width: 47px;
        height: 47px
    }

    .small-span img{
        width: 100%;
        height: 100%
    }
</style>