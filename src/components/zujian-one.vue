<template>
    <!-- <router-link to="/ceshi">111</router-link> -->
    <div>
        <div class="six-two">
            <div class="first">大聚会</div>
            <div class="first-1">好货一元秒</div>
            <div class="first-2">
                <div class="first-3">
                    <div class="first-4"><img src="" alt=""></div>
                    <div class="qingfeng">清风</div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data(){
        return {}
    }
}
</script>

<style scoped>
    .six-two {
        width: 50%;
        height: 143px;
        padding: 0 15px;
        
    }
    .first {
        color: #333;
        font-size: 18px;
        
    }
    .first-1 {
        font-size: 14px;
        color: #999;
    }
    .first-2 {
        display: flex;
    }
    .first-3 {
        display: flex;
        flex-direction: column;
    }
    .first-4 {
        width: 50%;
        height: 67px;
    }
    .first-4 img {
        width: 100%;
        height: 100%;
    }

    .qingfeng {
        background:url("data:image/png;base64,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") ;
        background-size: 3rem 1.08rem;
    }
</style>