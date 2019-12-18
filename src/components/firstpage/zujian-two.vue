<template>
    <!-- <router-link to="/">222</router-link> -->
    <div>
        <div class="wang-1">
            <div class="wang-wang">
                <div class="wang-1-img">
                    <img src="https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010546401320.jpg?format=_is_200w_200h_4e.webp" alt="">
                </div>
            </div>
            <div class="caotama">
                <div class="wang-2 wanbg">
                    <span class="wang-2-1">人气榜</span>
                </div>
                <div class="wang-2">人气智能电视榜</div>
                <div class="wang-2">爆卖4595件</div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
        data(){
        return {
            list:[
                {images:""},
                {name1:""},
                {name2:""},
                {name3:""},

            ]
        }
    }
}
</script>

<style scoped>
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


</style>