<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="container-right">
        <div>
            <div class="trueTop">
                <img src="//image2.suning.cn/uimg/cms/img/157659294457063153.jpg" alt="">
            </div>
            <div class="top" v-if="list[num]">
                {{list[num].title}}
            </div>
            <div class="boottom">
                <div class="btn-1"  v-for="(item,index) in sumlist" :key="index">
                    <div class="btn-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="btn-text">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
    props:["num"],
        data(){
        return {
            list:[],
            sumlist:[],
        }
    },
    methods: {
        
    },
    mounted(){
        Vue.axios.get('http://localhost:8080/Json/index.json').then((response) => {
            this.list = response.data.result.start
            this.sumlist =  this.list[this.num].cantainer
            console.log(this.num)
            console.log(this.list[this.num].cantainer[2].name)
        })
    },
    computed:{

    }
}
</script>

<style scoped>
    .top {
        width: 100%;
        height: 21px;
    }
    .boottom {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

    }
    .btn-1 {
        width: 33%;
        height: 92px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 18px;
    }
    .btn-img {
        width: 66px;
        height: 66px;
    }
    .btn-img img {
        width: 100%;
        height: 100%;
    }
    .btn-text {
        text-align: center;
        color: #666;
        font-size: 12px
    }

    .trueTop {
        width: 100%;
        height: 110px;
        margin-bottom: 20px;
    }

    .trueTop img {
        width: 100%;
        height: 100%
    }
</style>