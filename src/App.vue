<template>
  <div id="app">
  
    <!-- <wellcome/> -->
    <!-- <router-link to="/loadingScreen">Loading</router-link>
    <router-link to="/blog_screen">blog_screen</router-link> -->
    
    
  <router-view /> 
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import wellcome from './views/wellcome.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // wellcome
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
