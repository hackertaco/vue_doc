import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";

export default new Vuex.Store({
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0
    },
    timer: 0,
    result: ""
  }, // vue의 data
  getters: {}, //state 수정 시 사용
  mutations: {}, //vue의 computed state바꿀 때 mutations를 통해 바꿈

  actions: {} //비동기 사용시 또는 여러 mutation을 연달아 실행할 때
});
