import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";

export default new Vuex.Store({
  state: {
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ],
    turn: "O",
    winner: ""
  }, // vue의 data
  getters: {}, //state 수정 시 사용
  mutations: {
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === "O" ? "X" : "O";
    },
    [RESET_GAME](state) {
      state.turn = "O";
      state.tableData = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    },
    [NO_WINNER](state) {
      state.winner = "";
    }
  }, //vue의 computed state바꿀 때 mutations를 통해 바꿈

  actions: {} //비동기 사용시 또는 여러 mutation을 연달아 실행할 때
});
