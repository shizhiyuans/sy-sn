<template>
  <div id="app">
    <main>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </main>
      <keep-alive>
          <footer-bottom v-if="$route.meta.isshow"></footer-bottom>
      </keep-alive>
      
  </div>
</template>

<script>
import footer from "./components/footer.vue"
export default {
  name: 'app',
  components: {
      "footer-bottom":footer,
  },
  data(){
    return{

    }
  },
    mounted () {
      if(localStorage.getItem("path")){
        this.$store.state.path = JSON.parse(localStorage.getItem("path"))
      }
      if(localStorage.getItem("suiyi")){
        this.$store.state.say = localStorage.getItem("suiyi")
      }
      if(localStorage.getItem("see")){
        this.$store.state.see = JSON.parse(localStorage.getItem("see"))
      }
      if(localStorage.getItem("num")){
        this.$store.state.num = JSON.parse(localStorage.getItem("num"))
      }
      if(localStorage.getItem("arr")){
        this.$store.state.arr = JSON.parse(localStorage.getItem("arr"))
      }
      if(localStorage.getItem("obj")){
        this.$store.state.obj = JSON.parse(localStorage.getItem("obj"))
      }

    }
}
</script>

<style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size:12px
      }
      html, body {
        width: 100%;
        height: 100%
      }

      #app {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column
      }
      a {
        text-decoration: none
      }
      footer {

      }
      main {
        flex-grow: 1;
        overflow: scroll;
      }
</style>
