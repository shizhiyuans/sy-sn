<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="container-left">
        <div class="left-list" @click="slected(index)" v-for="(item,index) in list" :key="index">{{item.title}}</div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
        data(){
        return {
            list:[] 
        }
    },
    methods: {
        slected(index){
            this.$emit("qiaoqiao",index)
        }
    },
    mounted(){
    Vue.axios.get('http://localhost:8080/Json/index.json').then((response) => {
        this.list = response.data.result.start
    })

    }
}
</script>

<style scoped>
    .left-list {
        width: 96px;
        height: 52px;
        border: 1px solid #eee;
        color: #666;
        font-size: 14px;
        line-height: 52px;
        background: #F4F4F4;
        text-align: center;
    }
</style>