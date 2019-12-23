<template>
  <div class="an">
    <div class="an-img">
      <!-- <img src="../../assets/homepageimg/fast.jpg" alt /> -->
    </div>
    <div class="textbox">
      <transition name="slide">
        <div class="text" :key="text.id">
          <span class="an-title">{{text.val.title}}</span>
          <span class="an-content">{{text.val.content}}</span>
        </div>
      </transition>
    </div>
    <!-- <i class="line"></i>
    <span class="more">更多</span> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      animate: false,
      textArr: [
        { title: "推荐", content: "iPhone SE2曝光:经典ID+A13加加加加" },
        { title: "HOT", content: "果粉有福了!iPhone Xs Max便宜便宜便宜" },
        { title: "热门", content: "苹果怎么了!128G版iPhone已至已至" },
        { title: "最新", content: "苹果新机更香了:性能提升更有更有" }
      ],
      number: 0
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  },
  mounted() {
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
};
</script>

<style scoped>
.an {
  width: 94.6%;
  height: 3.69%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between
}
.an-title {
  padding: 0px 6px 0px 8px;
  color: #f23030;
}
.an-img {
  width: 21.56%;
  height: 53.3%;
  flex-shrink: 0;
}
.an-img > img {
  width: 100%;
  height: 100%;
}

ul {
  width: 80%;
  height: 30px ;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
  /* border: 1px solid blue */
}


.text {

   position: absolute; 
   width: 95%;
  height:30px;
  overflow: hidden;
  /* border: 1px solid red; */
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 30px;
  
    
}
.an-content{
    width: 150px
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-enter {
  transform: translateY(30px);
}
.slide-leave-to {
  transform: translateY(-30px);
}

.line{
  background: #ececec;
    width: .05rem;
    height: .8rem;
    display: inline-block;
    margin-right: .25rem;
    vertical-align: middle;
}

.more{
  font-size: 12px;
  flex-shrink: 0;
  margin-right: 10px
}
</style>