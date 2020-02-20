<template>
  <div>
    <div>{{ turn }}님의 턴입니다</div>
    <table>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td
          @click="onClickTd(rowIndex, cellIndex)"
          v-for="(cellData, cellIndex) in rowData"
          :key="cellIndex"
        >
          {{ cellData }}
        </td>
      </tr>
    </table>

    <div v-if="winner">{{ winner }}님의 압도적 승리!</div>
  </div>
</template>
<script>
import store, {
  CLICK_CELL,
  SET_WINNER,
  RESET_GAME,
  CHANGE_TURN,
  NO_WINNER
} from "./store";
import { mapState } from "vuex";
import Vue from "vue";

export default {
  store, //빼먹지마 !
  computed: {
    ...mapState({
      tableData: state => state.tableData,
      turn: state => state.turn,
      winner: state => state.winner,
      cellData(state, i, j) {
        for (i = 0; i < 3; i++) {
          for (j = 0; j < 3; j++) {
            return state.tableData[i][j];
          }
        }
      }
    })
  },
  methods: {
    onClickTd(rowIndex, cellIndex) {
      if (this.cellData) return;

      this.$store.commit(CLICK_CELL, {
        row: rowIndex,
        cell: cellIndex
      });
      let win = false;
      if (
        this.tableData[rowIndex][0] === this.turn &&
        this.tableData[rowIndex][1] === this.turn &&
        this.tableData[rowIndex][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[0][cellIndex] === this.turn &&
        this.tableData[1][cellIndex] === this.turn &&
        this.tableData[2][cellIndex] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[0][0] === this.turn &&
        this.tableData[1][1] === this.turn &&
        this.tableData[2][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[2][0] === this.turn &&
        this.tableData[1][1] === this.turn &&
        this.tableData[0][2] === this.turn
      ) {
        win = true;
      }
      if (win) {
        this.$store.commit(SET_WINNER, this.turn);
        this.$store.commit(RESET_GAME);
      } else {
        let all = true;
        this.tableData.forEach(row => {
          row.forEach(ceil => {
            if (!ceil) {
              all = false;
            }
          });
        });
        if (all) {
          this.$store.commit(NO_WINNER);
          this.$store.commit(RESET_GAME);
        }
        this.$store.commit(CHANGE_TURN);
      }
    }
  }
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
