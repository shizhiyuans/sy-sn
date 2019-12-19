<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
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
      a {
        text-decoration: none
      }
</style>
