<template>
  <div>
    <button class='main-start-btn btn' @click="checkDifficulty">あそぶ</button>
  </div>
</template>

<script>
export default {
  name:'Start',
  methods:{
    checkDifficulty(){
      // difficultyが0(難易度ボタンを押してない）だったら、アラートとか 押してあればゲームスタート
      if(this.$store.getters.getDifficulty === 0){
        console.log('難易度が選択されていません');
        this.$store.dispatch('applyIsErrorStart');
        // alert('むずかしさを えらんでね'); //もっとかわいくできないか？
      }else{
        this.$store.dispatch('resetIsErrorStart');
        this.$router.push("/game");
      }
    }
  }
}
</script>