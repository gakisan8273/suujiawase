<template>
  <div @click='resetGame'>
    <img src="../../assets/restart.png" alt="" class='header-icon'>
    <p class="header-nav-list-item-sentence">もういっかい</p>
  </div>
</template>

<script>
export default {
  methods: {
    resetGame(){
      // this.$store.dispatch('resetGame');
      this.$store.dispatch('applyDifficulty', this.$store.getters.getDifficulty);
      this.$store.dispatch('applyStartTime');
      this.$router.push('/game');
    }
  }
}
</script>