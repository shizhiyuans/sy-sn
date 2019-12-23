<template>
    <!-- <router-link to="/">222</router-link> -->
    <div class="qiao">
    <transition name="slide" mode="in-out">
        <div class="wang-1" :key="text.id">
            <div class="wang-wang">
                <div class="wang-1-img">
                    <img :src="text.val.images" alt="">
                </div>
            </div>
            <div class="caotama">
                <div class="wang-2 wanbg">
                    <span class="wang-2-1">人气榜</span>
                </div>
                <div class="wang-2">{{text.val.name1}}</div>
                <div class="wang-2">{{text.val.name2}}</div>
            </div>

        </div>
    </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            animate: false,
            number: 0,
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
    computed: {
        text() {
            return {
                id: this.number,
                val: this.list[this.number]
            };
        }
    },
    mounted(){
        this.startMove();

    },
    methods: {
            startMove() {
      // eslint-disable-next-line
    let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
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

    .slide-enter-active,
    .slide-leave-active {
        transition: all .5s linear;
    }
    .slide-enter {
        transform: translateY(150px);
    }
    .slide-leave-to {
        transform: translateY(-150px);
    }

    
</style>