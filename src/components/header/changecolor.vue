<template>
  <div @click="changeColor()">
    <img src="../../assets/changecolor.png" alt="" class='header-icon'>
    <p class="header-nav-list-item-sentence">いろをかえる</p>
  </div>
</template>

<script>
export default {
  name:"ChangeColor",
  methods: {
    changeColor(){
      console.log("ChangeColor");
      this.$store.dispatch('applyChangeColor');
    }
  }
}
</script>