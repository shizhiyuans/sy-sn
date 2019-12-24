<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div class="big-box-container">
        <div class="title">
            <span>联系客服</span>
            <span class="zhongjian">|</span>
            <span>企业注册</span>
        </div>
        <div class="container">
            <form action="get">
                <div class="h2">欢迎登录苏宁易购</div>
                <div class="inputBox">
                    <input v-model="usermessage" type="text" id="inputszy" placeholder="请输入手机号">
                </div>
                <div class="inputBox">
                    <input  v-model="passmessage" type="password" placeholder="请输入密码">
                    <span class="input-span">忘记密码</span>
                </div>
                <div class="denglu" @click="dengluyanzheng">
                    登录
                </div>
                <div class="zuihou">
                    <a class="lasta" href="#">
                        账号密码登录
                    </a>
                </div>
            </form>
        </div>
        <div class="box">
            <div class="wangling">
                <p>其他方式登录</p>
                <div class="QQ">
                    <div class="yitong">
                        <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_qq.png" alt="">
                    </div>
                    <div class="yitong">
                        <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png" alt="">
                    </div>
                    <div class="yitong">
                        <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_k.png" alt="">
                    </div>
                </div>
                <div class="wechat">
                    我同意
                    《<a href="https://sale.suning.com/all/regProtocol/snyghyzc.html">苏宁易购会员章程</a>》
                    《<a href="https://sale.suning.com/all/regProtocol/yfbxy.html">易付宝协议</a>》
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            usermessage:"",
            passmessage:"",

        }
    },
    methods: {
        dengluyanzheng(){
            if(this.$store.state.username == this.usermessage && this.$store.state.password == this.passmessage) {
                this.$store.commit("change")
                this.$router.push({path:"/six"})
                localStorage.setItem("user",JSON.stringify(this.usermessage))
                localStorage.setItem("pwd",JSON.stringify(this.passmessage));
                this.$store.commit("gaibian");
                this.$store.commit("clicks");
            }else{
                console.log("请输入正确的账号密码")
            }
        }
    },

}
</script>

<style scoped>
    .big-box-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .title {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;;
        padding: 7px 15px;
        color: #222;
        align-items: center;
    }
    .title .zhongjian {
        color: #ccc;
        margin: 0 15px
    }
    .title span {
        font-size: 13px;
    }
    .container {
        width: 100%;
        height: 300px;
        padding: 0 41px;
        margin: 30px 0 0 0 ;
    }
    .container .h2 {
        font-size: 20px;
        color: #222;
        margin-bottom: 20px;
    }
    .inputBox {
        width: 100%;
        height: 50px;
        margin: 33px 0 0 0;
        border-bottom: 1px solid #ccc;
        padding-top: 10px;
        display: flex;
    }
    .input-span {
        width: 100px;
        color: #333;
        font-size: 14px;
    }
    .inputBox input {
        width: 100%;
        height: 36px;
        border: none;
        color: #ccc;
        font-size: 16px;
        outline: none 
    }
    .inputBox input[type="text"]:focus,.inputBox input[type="password"]:focus{
        border-left: #ffcc00 1px solid;
    }
    .szy_box {
        width: 100%;
        height: 43px;
        margin-top: 16px;
        display: flex;
    }

    label {
        border-bottom: 1px solid #ccc;
        width: 43px;
        height: 43px;
        margin-right: 15px;
    }

    .lable {
        width: 110px;
        height: 43px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
        color: #ccc;
        text-align: center;
        line-height: 43px;;
    }
    .denglu {
        width: 100%;
        height: 50px;
        color: #222;
        background: #ffcc00;
        margin-top: 30px;
        font-size: 19px;
        font-weight: bold;
        text-align: center;
        line-height: 50px;
        border-radius: 10px;
    }
    .lasta {
        display: inline-block;
        font-size: 16px;
        color: #333;
        margin-top: 24px;
        text-align: center;
    }
    .zuihou {
        width: 100%;
        text-align: center;
    }

    .wangling {
        width: 265px;
        height: 102px;
        margin: 250px auto;
        text-align: center;
        display: flex;
        flex-direction: column
    }
    .box {
        width: 100%;
    }
    .QQ {
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .QQ .yitong {
        width: 36px;
        height: 36px;
        margin-top: 15px;
    }
    .QQ .yitong img {
        width: 100%;
        height: 100%;
    }

    .wechat a {
        color: #101010;
        text-decoration: underline
    }
</style>