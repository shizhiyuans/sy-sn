<template>
    <!-- <router-link to="/">222</router-link> -->
    <div class="qiao">
        <div class="wang-1" v-for="(item,index) in list" :key="index">
            <div class="wang-wang">
                <div class="wang-1-img">
                    <img :src="item.images" alt="">
                </div>
            </div>
            <div class="caotama">
                <div class="wang-2 wanbg">
                    <span class="wang-2-1">人气榜</span>
                </div>
                <div class="wang-2">{{item.name1}}</div>
                <div class="wang-2">{{item.name2}}</div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            index: 0,
            timer:null,
            count: 0,
            list:[
                {
                    images:"//imgservice.suning.cn/uimg1/sniss/improve/av-CgfFxASmvYW2kwV4_Bg.jpg?format=_is_200w_200h_4e.webp",
                    name1:"健康爱吃猫粮榜",
                    name2:"卖爆217件"
                },
                {
                    images:"//imgservice.suning.cn/uimg1/sniss/improve/jc20UMfmLjbSvwhN44Vgpw.jpg?format=_is_200w_200h_4e.webp",
                    name1:"鲜嫩水产海鲜榜",
                    name2:"卖爆3603件"
                },
                {
                    images:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000139833420.jpg?format=_is_200w_200h_4e.webp",
                    name1:"慢炖溢香炖锅榜",
                    name2:"今日热销爆款"
                }

            ]
        }
    },
    mounted(){
        this.timer = setInterval(this.autoPlay, 2000);
    },
    methods: {
        autoPlay(){
            if (++this.index >= 3) {this.index = 0}
                this.changeImg(this.index);
        },
        changeImg(suanle){
            this.count = suanle * -136
            document.querySelector('.qiao').style.marginTop = this.count + 'px'
        }
    }
}
</script>

<style scoped>
    .qiao {
        width: 125px;
        height: 136px;
    }
    .wang-1 {
        width: 125px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center；
        
    }

    .wang-wang {
        width: 100%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

    }
    .wang-1-img {
        width: 83px;
        height: 83px;
        
    }
    .wang-1-img img {
        width: 100%;
        height: 100%;
    }

    .caotama {
        width: 100%;
        background: url(https://image1.suning.cn/uimg/cms/img/156929175197393382.png?from=mobile) no-repeat;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .wang-2 {
        width: 100%;
        height: 19px;
        color: white;
        text-align: center;
    }
    .wanbg {
        position: relative;
        min-width: 100%;
        height: 15px;
    }
    .wang-2-1 {
        width: 55px;
        height: 19px;
        border: 1px solid rgb(225,166,112);
        position: absolute;
        top: -10px;
        color: rgb(225,166,112);
        background: #fff;
        left: 30%;
        border-radius: 10px;
    }

    .qiao {
        transition: all 1s
    }

    
</style>