import Vuex from "vuex";
export default new Vuex.Store({
  state: {}, // vue의 data
  mutations: {}, //vue의 computed state바꿀 때 mutations를 통해 바꿈
  getters: {}, //state 수정 시 사용
  actions: {} //비동기 사용시 또는 여러 mutation을 연달아 실행할 때
});
