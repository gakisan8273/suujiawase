<template>
  <div @click="changeOrder">
    <img src="../../assets/replace.png" alt="" class='header-icon'>
    <p class="header-nav-list-item-sentence">ならべかえる</p>   
  </div>
</template>

<script>
export default {
  methods: {
    changeOrder(){
      this.$store.dispatch('applyChangeOrder');
    }
  }
}
</script>