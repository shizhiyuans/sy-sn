<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="last-left">
        <div class="box" @click="huoqurouter(item,index)" v-for="(item,index) in this.$store.state.list2" :key="index">
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
        
        }
    },
    methods: {
        huoqurouter(item,index){
            this.$router.push({path:"seven"})
            this.$store.commit("houguanxin",index)

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