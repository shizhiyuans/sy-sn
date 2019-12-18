<template>
  <div id="app">
    <main><router-view></router-view></main>
    <footer><footer-bottom></footer-bottom></footer>
  </div>
</template>

<script>
import footer from "./components/footer.vue";
export default {
  name: 'app',
  components: {
    "footer-bottom":footer,
    
  },
  data(){
    return{

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

      main {
        flex-grow: 1;
        overflow: scroll
      }

      footer {
        height: 55px;
        width: 100%;
        flex-shrink: 0
      }

      a {
        text-decoration: none
      }
</style>
