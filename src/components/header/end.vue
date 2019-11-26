<template>
  <div @click='resetDifficulty'>
    <img src="../../assets/end.png" alt="" class='header-icon'>
    <p class="header-nav-list-item-sentence">おしまい</p>
  </div>
</template>

<script>
export default {
  methods: {
    resetDifficulty(){
      this.$store.dispatch('resetDifficulty');
      this.$router.push('/');
    }
  }
}
</script>