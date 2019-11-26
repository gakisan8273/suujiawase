<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>

#app {
  font-family: 'mini-wakuwaku', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
