<template>
  <div class="main-result-container">
  <!-- <div class='container'>
    <div class='main'>
      <div class='main-container'> -->
        <p class='main-word'>がんばったね！　おめでとう！</p>
        <p class='main-result'>かかったじかん　<span class='main-result-second'>{{ getRecentClearTime }}</span>　びょう</p>
        <img src="@/assets/train_move1.gif" alt="" class="main-clearIMG">
        <!-- レコードをコンポーネント化してTOPと共通化 -->
        <Record/>
      <!-- </div>
    </div>
  </div> -->
  </div>
</template>

<style>
.main-word{
  color:#EC693F;
  font-size: 40px;
  margin-bottom:20px;
}
.main-result{
  color:#707070;
  font-size:25px;
}
.main-result-second{
  font-size:40px;
}
.main-clearIMG{
  width:100%;
}

</style>


<script>
import Record from '@/components/record/record.vue'

export default {
  name: 'Result',
  components: { Record },
  computed:{
    getRecentClearTime(){
      return this.$store.getters.getRecentClearTime
    }
  }
}
</script>