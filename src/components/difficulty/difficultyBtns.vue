<template>
  <div class='main-difficult'>
    <ul class='main-difficult-list'>
      <li ><button class='main-difficult-list-btn btn' :class="{ isSelected : this.$store.getters.getDifficulty === 9, }" :difficulty=9 @click='applyDifficulty'>かんたん</button></li>
      <li ><button class='main-difficult-list-btn btn' :class="{ isSelected : this.$store.getters.getDifficulty === 16, }" :difficulty=16 @click='applyDifficulty'>ふつう</button></li>
      <li ><button class='main-difficult-list-btn btn' :class="{ isSelected : this.$store.getters.getDifficulty === 25, }" :difficulty=25 @click='applyDifficulty'>むずかしい</button></li>
    </ul>
  </div>  
</template>

<style>
.isSelected{
  /* ボタンが沈む様な動き */
}
.isErrorStart{
  border : 5px dashed red;
  border-radius: 20px;
}
</style>

<script>
export default {
  methods: {
    applyDifficulty(event){
      const difficulty = Number(event.target.attributes.difficulty.value);
      console.log({difficulty});
      this.$store.dispatch('applyDifficulty', difficulty);
    }
  }
}
</script>