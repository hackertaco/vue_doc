<template>
  <div>
    <div>{{ turn }}님의 턴입니다</div>
    <table-component :table-data="tableData"></table-component>
    <div v-if="winner">{{ winner }}님의 압도적 승리!</div>
  </div>
</template>
<script>
import TableComponent from "./TableComponent";
import Vue from "vue";
export default {
  components: { TableComponent },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "O",
      winner: ""
    };
  },
  methods: {}
};
</script>
<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
