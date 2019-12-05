<template>
  <div id="app">
    <Header/>
      <div class='container' id="container">
        <div class='main'>
         <div class='main-container'>
            <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import $ from 'jquery'

export default {
  name: 'App',
  components: { Header }
}

// ウィンドウの高さを取得し、それからヘッダー高さを引いたものをmainの高さとする
$(function(){
  let windowHeight = window.innerHeight;
  let headerHeight = $('#header').innerHeight();
  console.log({window});
  console.log($('#header'));
  console.log({windowHeight});
  console.log({headerHeight});
  $('#container').attr({'style' : 'height:' + (windowHeight - headerHeight) + 'px' });
});
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
