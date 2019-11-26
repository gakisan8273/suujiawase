<template>
  <div class='main-record'>
    <div class='main-record-container'>
      <!-- <p class='main-record-title'>りれき</p> -->

       <!--履歴がなにもなければ、何か文を表示する　新たにpタグ作ってtableとv-ifか？ -->
      <div class="main-record-title main-record-noselect" v-if="getClearHistory.length === 0">
        <p class='main-record-title-innner'>むずかしさを えらんでから</p>
        <p class='main-record-title-innner'>「あそぶ」をおして げーむを はじめよう！</p>
      </div>
      <div v-else>
        <p class='main-record-title'>りれき</p>
        <table class='main-record-table'>
          <!-- 一番上から新しい順にする　v-forいける？tableは何か制約があった様な・・・ -->
          <!-- idを表示するのでなく、どれが新しい方なのかわかる様にする -->

          <tr v-for="item in getClearHistory" :key="item.id" class="main-record-table-row"><td>{{ item.clearDate }}</td><td>{{ translateDiffuculty(item.difficulty) }}</td><td>{{ item.clearTime }} びょう</td></tr>

        </table>
      </div>
    </div>
  </div>
</template>

<style>
.main-record-title-innner{
  margin-bottom: 20px;
}
.main-record-noselect{
  margin-top: 90px;
}
</style>

<script>
export default {
  computed:{
    // クリア履歴を取得　配列を反転させて新しいのを上に表示する　最新５件まで
    getClearHistory(){
      console.log("getClearHistory");
      let clearHistoryTemp = "";
      let clearHistory = "";
      clearHistoryTemp = this.$store.getters.getClearHistory;
      // .slice().reverece() とすると元の配列の順序が維持される　slice()がないと元の配列が逆になってしまう
      clearHistory = clearHistoryTemp.slice().reverse();
      // 配列5個まで
      console.log(clearHistory.slice(0,5))
      return clearHistory.slice(0,5);
    },
  },
  methods: {
    translateDiffuculty(difficulty){
      let word = "";
      switch (difficulty) {
        case 9:
          word = "かんたん";
          break;
        case 16:
          word = "ふつう";
          break;
        case 25:
          word = "むずかしい";
        default:
          break;
      }
      return word;
    }
  }
}
</script>