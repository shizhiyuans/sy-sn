<template>
    <!-- <router-link to="/">222</router-link> -->
        <div class="top-bar">
            <div class="title">
                <span class="title-img" @click="wodiu"><img src="../../public/images/left.png" alt=""></span>
                <a class="title-a" href="https://m.suning.com/search.html">
                    <span class="iconfont icon-fangdajing"></span>
                    <span class="title-a-2">搜索商品或店铺</span>
                </a>
            </div>
            <div class="container">
                    <left @qiaoqiao="dianji"></left>
                    <Right :num = "num"></Right>
            </div>
        </div>
</template>
<script>
import Left from "./secondpage/left.vue"
import Right from "./secondpage/right.vue"
export default {
        data(){
        return {
            num:0
        }
    },
    
    components:{
        Left,
        Right
    },
    methods: {
        dianji(index) {
            this.num = index
        },
        wodiu(){
            window.history.go(-1)
        }
    }
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    html,body {
        width: 100%;
        height: 100%;
    }

    .top-bar {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #333;
    }
    .top-bar {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }
    .icon-ziyuan {
        width: 30px;
        height: 30px;
        font-size: 24px
    }
    .title {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        background: #F8F8F8;
        padding-left: 10px;
        flex-shrink: 0
    }

    .title-img {
        width: 40px;
        height: 40px;
        color: #333;
        padding: 10px
    }

    .title-img img{
        width: 100%;
        height: 100%;
    }

    .title-a {
        width: 85%;
        height: 70%;
        border:1px solid #ccc;
        border-radius: 6px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .title-a-2 {
        margin-left: 5px;
        font-size: 14px;
        color: #CACACA
    }
    .container {
        flex-grow: 1;
        overflow: scroll;
        display: flex;
        
    }
    .container-left {
        width: 96px;
        height: 100%;
        flex-shrink: 0;
        overflow: scroll
    }
    .container-right {
        overflow: scroll;
        flex-grow: 1;
        padding: 0 10px
    }
</style>