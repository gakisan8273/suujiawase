<template>
<!-- ヘッダーはコンポーネント化した 各画面共通があるのでApp.vueで読み込み -->
  <div class="main-top-container">
  <!-- <div class='container' id="container">
    <div class='main'>
      <div class='main-container'> -->
        <!-- むずかしさボタンをコンポーネント化 -->
        <DifficultyBtns/>
        
        <p class="main-sentence" :class="{isErrorStart: this.$store.getters.getIsErrorStart}">　⬆︎　　むずかしさを えらんでね　　⬆︎　</p>
        <!-- あそぶ　をクリックするとゲーム画面に遷移 -->
        <div class='main-start' @click="applyStartTime">
           <Start />
        </div>

        <!-- レコードもコンポーネント化する -->
        <Record/>

      <!-- </div>
    </div> -->
  <!-- </div> -->
  </div>

</template>

<script>
import DifficultyBtns from '@/components/difficulty/difficultyBtns.vue'
import Record from '@/components/record/record.vue'
import Start from '@/components/start/start.vue'

export default {
  name: 'Top',
  components: { DifficultyBtns, Record, Start},
  methods:{
    applyStartTime(){
      console.log("gameStart");
      this.$store.dispatch('applyStartTime');
    }
  }
}
</script>

<style>
/* リセット */
 html,body,div,h1,h2,ul,li,p,button{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
/* div{
  height:100%;
} */
a,a:visited{
  text-decoration: none;
  color:#A58234;
}
div{
  width:100%;
  text-align: center;
}
#app{
  height:100%;
}
body{
  height:100vh;
}
li{
  list-style: none;
}
button:focus{
  outline:0;
}
.btn{
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 0 #627295;

  position: relative;
}
.btn:active, .isSelected{
  -webkit-transform: translateY(8px)!important;
  transform: translateY(4px)!important;/*下に動く*/
  box-shadow: none!important;
  border-bottom: none!important;  
}
.btn:hover{
  transform:translateY(-4px);
  box-shadow: 0 12px 0  #627295;
}

/* container */
.container{
  height:100%;
}
.main-top-container,.main-game-container,.main-result-container{
  height:100%;
}

/* header */
.header{
  height:100px;
  background-color: #ffffff;
  box-shadow: 0px 5px 0px rgba(33, 33, 33, 0.6);
  padding:10px 0 0 0; 
  display: flex;
  justify-content: center;
}
.header-container{
  width:980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-title{
   display: inline-block;
   color:#A58234;
   font-size:50px;
   font-weight: 100;
   /* width: 40%; */
}
.header-nav-list{
  display: flex;
}
.header-nav-list-item{
  margin: 0 20px;
  text-align: center;
  cursor: pointer;
}
.header-nav-list-item-sentence{
 color:#452813;
}
.header-nav-list-color{
  margin-right: 50px;
}
.header-nav-list-panel{
  margin-right: 100px;
}
.header-icon{
  height: 50px;
  width:  50px;
}

/* main */
.main{
  background-image: url("../static/background.png");
  width:100%;
  display: flex;
  justify-content: center;
  padding: 50px 0 0 0;
  height:100%;
}
.main-container{
  width:980px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.main-difficult{
  width:100%;
}

.main-difficult-list{
  display:flex;
  justify-content:center;
}
.main-difficult-list-btn{
  width:200px;
  height:50px;
  background-color:#EBBC98;
  border-radius:20px;
  font-family: 'mini-wakuwaku', sans-serif;
  font-size:20px;
  color:#452813;
  margin:0 10px;
}

.main-sentence{
  color:#452813;
  font-size: 20px;
  margin-top:20px;
}

/* main-start */
.main-start{
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
.main-start-btn{
  display:block;
  /* margin-top: 80px; */
  width:400px;
  height:100px;
  border-radius: 20px;
  font-family: 'mini-wakuwaku', sans-serif;
  font-size:50px;
  color:#ffffff;
  background-color: #EC693F;
}


/* main-record */
.main-record{
  margin-top:40px;
  display:flex;
  justify-content: center;
}
.main-record-container{
  width:700px;
  height:250px;
  /* height: 10rem; */
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom:20px;
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
}
.main-record-title{
  display:block;
  font-size: 20px;
  color:#452813;
  padding-left:30px;
  margin-top:17px;
}
.main-record-table{
  margin-top: 10px;
  /* margin-left: 20px;
  margin-right:20px; */
  margin:10px auto;
  margin-bottom: 20px;
  text-align: center;
  border-collapse: collapse;
}
.main-record-table-row{
  width: 560px;
  height: 40px;
  padding: 5px 0 5px 0;
  font-size: 20px;
  color:#452813;
  /* border-top:dotted 1px #452813; */
  border-bottom: dotted 1px #452813;
}
.main-record-table-row:last-child{
  border-bottom: none;
}
td{
  width: 170px;
}

</style>