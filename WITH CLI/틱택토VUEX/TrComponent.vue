<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-index="index"
      :row-index="rowIndex"
      :key="index"
    ></td-component>
  </tr>
</template>

<script>
import { mapState } from "vuex";

import TdComponent from "./TdComponent";
export default {
  components: {
    TdComponent
  },
  computed: {
    ...mapState({
      rowData(state) {
        return state.tableData[this.rowIndex];
      }
    })
  },
  props: {
    rowIndex: Number
  }
};
</script>
