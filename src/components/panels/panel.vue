<template>
  <!-- <div class="main-panels"> -->
    <button class="main-panels-panel btn" @click="checkNumber($event,number, id)">
      {{ number }}
    </button>
    <!-- <button class="main-panels-panel" v-for="item in getPanelNumbers()" v-bind:key="item.id" :number="item.number" :color="item.color" :class="getPanelClass" @click="checkNumber($event, item)">{{ item.number }}</button> -->
  <!-- </div> -->
    <!-- width 3x3-> 30% 4x4-> 22% 5x5->18% -->
  <!-- トップで選択する難易度に応じて、パネルの数を変える（ストアにパネルの数を入力する） -->
  <!-- ストアからパネルの数を取得し、v-forで描画　そうすればPanelsだけで全ての難易度を賄える -->
</template>

<script>
export default {
  name: 'Panel',
  props: ['number', 'id'],
  methods: { 
    checkNumber($event, number, id){
      // パネルと指示数字が一致していれば、指示数字をインクリメントしてパネルを非表示にする
      // 一致していなければ、ハズレのクラスを付与する
      
      // まず全てのパネルのisIncorrectをfalseにする
      this.$store.dispatch('resetIncorrect');

      if (number === this.$store.getters.getNextNumber){
        // 表示されている数字をインクリメントする
        this.$store.dispatch('incrementNumber');

        // 押したパネルのisShowをFalseにする
        console.log({id});
        this.$store.dispatch('applyIsNoShow', id);

        // nextNumberがdifficultyを超えたら、resultページへ遷移する　時間も記録する
        if (this.$store.getters.getNextNumber > this.$store.getters.getDifficulty){
          // ここに遷移と時間記録ロジック
          this.$store.dispatch("applyEndTime");
          this.$store.dispatch("applyClearDate");
          this.$store.dispatch("applyClearTime");
          
          //画面遷移
          this.$router.push("/result");
        }

      }else{
        // 間違いならば押したパネルのisIncorrectをtrueにする　パネルのインデックスを渡したい
        console.log('checkNumber', id);
        this.$store.dispatch('applyIncorrect', id);
      }
      return ;
    }
  }
}
</script>


<style>
.main-panels{
  width: 100%;
  /* margin-top: 40px; */
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 500px;
}
.main-panels-panel{
  /* flex-basis: 22%; */
  height: 70px;
  border-radius: 20px;
  font-size: 50px;
  font-weight: 100;
  font-family: 'mini-wakuwaku', sans-serif;
  color: #fff;
}
.main-panels-panel[color="1"]{
  background-color: #FFD800;
}
.main-panels-panel[color="2"]{
  background-color: #4CB8F0;
}
.main-panels-panel[color="3"]{
  background-color: #90C320;
}
.main-panels-panel[color="4"]{
  background-color: #EA67A0;
}
.main-panels-panel[color="5"]{
  background-color: #FF6C00;
}
.main-panels-panel[color="6"]{
  background-color: #00FF93;
}
.easyPanel{
  flex-basis:30%
}
.normalPanel{
  flex-basis:22%
}
.hardPanel{
  flex-basis:18%
}
.isNoShow{
  visibility: hidden;
}
.isIncorrect{
  border : 10px solid red;
}
</style>



