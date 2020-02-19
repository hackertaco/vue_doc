<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen">
      {{ message }}
    </div>
    <div>
      <div>평균 시간 :{{}}</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작하세요!!"
    };
  },
  methods: {
    onReset() {
      return {};
    },
    onClickScreen() {
      if ((this.state = "waiting")) {
        this.state = "ready";
      } else if (this.state === "ready") {
        this.state = "now";
      } else if (this.state === "now") {
        this.state = "waiting";
      }
    }
  }
};
</script>
<style scoped>
/* 이 컴포넌트 안에서만 이 스타일을 하고 싶으면 scoped를 붙여줘! */
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
