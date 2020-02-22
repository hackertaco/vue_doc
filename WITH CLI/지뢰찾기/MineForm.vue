<template>
  <div>
    <input
      type="number"
      placeholder="세로"
      :value="row"
      name
      id
      @change="onChangeRow"
    />
    <input
      type="number"
      placeholder="가로"
      :value="cell"
      name
      id
      @change="onChangeCell"
    />
    <input
      type="number"
      placeholder="지뢰"
      :value="mine"
      name
      id
      @change="onChangeMine"
    />
    <button @click="onChangeBtn">생성</button>
  </div>
</template>
<script>
import { START_GAME } from "./store";
export default {
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 20
    };
  },
  methods: {
    onChangeRow(e) {
      this.row = e.target.value;
    },
    onChangeCell(e) {
      this.cell = e.target.value;
    },
    onChangeMine(e) {
      this.mine = e.target.value;
    },
    onChangeBtn() {
      this.$store.commit(START_GAME, {
        row: this.row,
        cell: this.cell,
        mine: this.mine
      });
    }
  }
};
</script>
