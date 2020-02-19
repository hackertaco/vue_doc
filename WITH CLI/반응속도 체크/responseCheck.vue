<template>
  <div>
    <div id="screen">{{ message }}</div>
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
      answer: getNumbers(),
      tries: [],
      value: "",
      result: ""
    };
  },
  methods: {
    onReset() {
      return {
        result: [],
        state: "waiting",
        message: "클릭해서 시작하세요"
      };
    }
  }
};
</script>
<style></style>
