<template>
    <div class="container">
        <div class="title-top">
            <div @click="goback()" class="iconfont icon-ziyuan"></div>
            <div class="titleTop-2">
                <span class="iconfont icon-fangdajing"></span>
                <input v-model="val" type="text" placeholder="年货礼物">
            </div>
            <div @click="search()" class="titleTop-3">搜索</div>
        </div>

        <div class="main">
            <div class="shortTitle" v-for="(item,index) in this.list" :key="index">
                <div class="shortTitle-1">
                    <img :src="item.img" alt="">
                </div>
                <div>
                    <div class="big-bg">{{item.title}}</div>
                    <div>
                        <span class="font-color">暗夜绿色</span>
                        <span class="font-color">双卡双待</span>
                        <span class="font-color">全网通</span>
                    </div>
                    <div class="wosuiyi">
                        <div>
                            <p class="font-sw">{{item.neicun}}</p>
                            <p class="font-em">机身内存</p>
                        </div>
                        <div>
                            <p class="font-sw">{{item.chicun}}</p>
                            <p class="font-em">屏幕尺寸</p>
                        </div>
                    </div>
                    <div class="bottom-div">
                        <div>
                            <span>{{item.pingjia}}</span>
                            <span>好评率99%</span>
                        </div>
                        <div class="font-line">
                            {{item.dianming}}
                            <span>>进店</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[],
            val:""
        }
    },
    methods: {
        search(){
            let that = this
            if(this.val == '手' || this.val == '手机'){
                axios.get('http://localhost:8080/json/search.json')
                .then(function (response) {
                    console.log(response.data.result.iphone[0].title);
                    console.log(that.list)
                    that.list = response.data.result.iphone 
                }).catch(function (error) {
                console.log(error);
                console.log(222)
            });
            }else if(this.val == '电' || this.val == '电视'){
                axios.get('http://localhost:8080/json/search.json')
                .then(function (response) {
                    console.log(that.list)
                    that.list = response.data.result.dianshi 
                }).catch(function (error) {
                console.log(error);
                console.log(222)
            });
            }
            

        },
        goback(){
            window.history.go(-1)
        }
    }

}
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
    }
    .title-top {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        border-bottom: 2px solid #ccc
    }
    .titleTop-2 {
        width: 310px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgb(240,240,240);
        padding: 0 20px;
    }
    .titleTop-2 input {
        width: 90%;
        height: 33px;
        border: none;
        background: rgb(240,240,240)
    }
    .titleTop-3 {
        font-size: 16px;
    }
    .main {
        width: 100%;
        margin-top: 20px;
    }
    .shortTitle {
        width: 100%;
        height: 210px;
        padding: 11px;
        display: flex;
    }
    .shortTitle-1 {
        width: 110px;
        height: 110px;
        margin-right: 15px;
    }
    .shortTitle-1 img {
        width: 100%;
        height: 100%
    }
    .wosuiyi {
        display: flex;
    }
    .bottom-div {
        padding-top: 60px;
    }
    .font-color {
        color: #999;font-size: 14px
    }
    .font-sw {
        color: #353d44;
        font-size: 14px;
    }
    .font-em {
        color: #999;
        font-size: 12px;
    }
    .big-bg {
        font-size: 14px;
        color: #333;
    }
    .font-line {
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
    }
</style>