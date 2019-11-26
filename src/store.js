import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    difficulty: 0, // 9か16か25　デフォは0とする 0のままスタートするとアラートとか
    startTime: 0, // あそぶ を押した時の時間
    nextNumber: 1, // ゲーム中、次に押す数字
    endTime: 0, // ゲーム中、最後のパネルを押した時の時間
    clearTime: 0, // ゲームクリアした時間
    clearDate: 0, // ゲームクリアした時刻
    clearHistory: [], // クリア履歴　{id, clearTime, difficulty} 最新のものを最初になるよう、反転させる必要がある
    clearHistoryNumber: 0, // クリアした回数
    panels: "", // パネルのデータ 中身がないのにスタートしようとしたらアラートを出すようにする
    isErrorStart: false, // 難易度を選択する前にあそぶを押すとtrueにする　なんいどを選択してあそぶを押したらfalseにする
  },
  getters:{
    getDifficulty(state) {
      return state.difficulty
    },
    getPanels(state){
      console.log("getPanels");
      console.log(state.panels);
      return state.panels;
    },
    getNextNumber(state){
      return state.nextNumber;
    },
    getRecentClearTime(state){
      // 最新のクリアタイムを取得
      return state.clearTime;
    },
    getClearHistory(state){
      // クリア時間の履歴を取得
      return state.clearHistory;
    },
    getIsErrorStart(state){
      // 難易度が設定されているか
      return state.isErrorStart;
    },
    getEndTime(state){
      return state.endTime;
    }
  },

  mutations: {
    setDifficulty(state, payload){
      state.difficulty = payload;
    },
    setStartTime(state, payload){
      state.startTime = payload;
      console.log(state.startTime);
    },
    setEndTime(state, payload){
      state.endTime = payload;
      console.log(state.endTime);
    },
    setClearTime(state){
      state.clearTime = state.endTime - state.startTime;
      state.clearHistoryNumber++;
      state.clearHistory.push({id:state.clearHistoryNumber, clearTime:state.clearTime, difficulty:state.difficulty, clearDate:state.clearDate});
      console.log(state.clearHistory);
    },
    setNextNumber(state){
      state.nextNumber++;
      console.log("increment");
    },
    resetNextNumber(state){
      state.nextNumber = 1;
    },
    setPanelData(state, payload){
      state.panels = payload;
      // console.log("setPanelData");
      // console.log(state.panels);
    },
    setIncorrect(state, payload){
      console.log('setIncorrect');
      // 指定IDのクラスを変える　配列の順序で決めてしまうと並び替えしたときに不具合になる
      state.panels.forEach( (element) => {
        console.log(payload);
        if(element.id === payload){
          element.classObj.isIncorrect = true;
        }
      });
      // console.log(state.panels[payload-1].classObj.isIncorrect);
    },
    resetIncorrect(state){
      console.log('resetIncorrect');
      state.panels.forEach(element => {
        element.classObj.isIncorrect = false;
      });
    },
    setIsNoShow(state, payload){
      console.log('setIsNoShow');
      console.log(payload + 'hidden');

      // 指定IDのクラスを変える　配列の順序で決めてしまうと並び替えしたときに不具合になる
      state.panels.forEach( (element) => {
        console.log(payload);
        if(element.id === payload){
          element.classObj.isNoShow = true;
        }
      });

      // state.panels[payload-1].classObj.isNoShow= true;

    },
    doChangeColor(state){
      // state.panels[i].color をforeach　colorはランダムの１〜６
      console.log('doChangeColor')
      state.panels.forEach(element => {
        element.color = Math.floor(Math.random() * 6 + 1 );
      });
    },
    doChangeOrder(state){
      // state.panels の配列順序をランダムに入れ替える lodash?
      console.log('doChangeOrder');
      state.panels = _.shuffle(state.panels);
      console.log(state.panels);
    },
    setIsErrorStart(state){
      console.log('setIsErrorStart ');
      state.isErrorStart = true;
      console.log(state.isErrorStart);
    },
    resetIsErrorStart(state){
      console.log('resetIsErrorStart ');
      state.isErrorStart = false;
      console.log(state.isErrorStart);
    },
    resetGame(state){
      // nextNumber, panels.isNoShow, panels.isIncorrect をリセットする
      console.log('resetGame');
      state.nextNumber = 1;
      state.panels.forEach(element => {
        element.classObj.isNoShow = false;
        element.classObj.isIncorrect = false;        
      });
    },
    setClearDate(state){
      state.clearDate = new Date().toLocaleTimeString();
      console.log(state.clearDate);
    },
    resetDifficulty(state){
      state.difficulty = 0;
      console.log('resetDifficulty');
    }

  },

  // action
  actions: {
    applyDifficulty({ commit }, difficulty){
      commit('setDifficulty', difficulty)

      let isEasy = false;
      let isNormal = true;
      let isHard = false;

      switch (difficulty) {
        case 9:
          isEasy = true;
          isNormal = false;
          isHard = false;
          break;
        case 16:
          isEasy = false;
          isNormal = true;
          isHard = false;
          break;
        case 25:
          isEasy = false;
          isNormal = false;
          isHard = true;
          break;
        default:
      }
      
      // 重複無しランダム数字を生成　別メソッドの方がいいかも
      let array =[];
      for (let i = 1; i <= difficulty; i++) {
        array.push(i);
      }
      for(let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let tmp1 = array[i];
          array[i] = array[j];
          array[j] = tmp1;
          // console.log({array})
      }

      // データ配列を生成　色はcolor属性を判別して変える
      let tempPanel = [];
      for (let i = 1; i <= difficulty; i++) {
        tempPanel.push({id:i, number:array[i-1], color:Math.floor(Math.random() * 6 + 1 ), classObj: {isNoShow:false, isIncorrect:false, easyPanel:isEasy, normalPanel:isNormal, hardPanel:isHard } });
      }
      // console.log(tempPanel[0].classObj)
      commit('setPanelData', tempPanel);
      commit('resetNextNumber');
    },
    applyStartTime({ commit }){
      const now = new Date();
      const startTime = Math.floor(now.getTime() / 1000);
      commit('setStartTime', startTime)
    },
    applyEndTime({ commit }){
      const now = new Date();
      const endTime = Math.floor(now.getTime() / 1000);
      commit('setEndTime', endTime)
    },
    applyClearTime({ commit }){
      commit('setClearTime')
    },
    applyClearDate({commit}){

      commit('setClearDate')
    },
    incrementNumber({commit}){
      commit('setNextNumber')
    },
    applyIncorrect({commit},id){ //引数にインデックス　そのインデックスのクラスオブジェクトを編集？
      console.log({id});
      commit('setIncorrect',id)
    },
    resetIncorrect({commit}){
      commit('resetIncorrect')
    },
    applyIsNoShow({commit}, id){
      commit('setIsNoShow', id)
    },
    applyChangeColor({commit}){
      commit('doChangeColor');
    },
    applyChangeOrder({commit}){
      commit('doChangeOrder');
    },
    applyIsErrorStart({commit}){
      commit('setIsErrorStart');
    },
    resetIsErrorStart({commit}){
      commit('resetIsErrorStart');
    },
    resetGame({commit}){
      commit('resetGame');
    },
    resetDifficulty({commit}){
      commit('resetDifficulty');
    }
  }
})

export default store