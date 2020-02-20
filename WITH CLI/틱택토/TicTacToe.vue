<template>
  <table-component :table-data="tableData"></table-component>
</template>
<script>
export default {
  components: {},
  data() {
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  },
  methods: {}
};
</script>
<style scoped>
.ball {
  display: inline-block;
  border: 1px solid gray;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>
