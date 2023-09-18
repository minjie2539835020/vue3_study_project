<template>
  <div class="child1">
    <h1>{{ useInfoStore.count }}--------{{ useInfoStore.add }}</h1>
    <hr />
    <button @click="handler">点击count+100</button>
  </div>
</template>

<script setup lang="ts">
import useInfo from "../../store/modules/info";
// 获取小仓库对象
let useInfoStore = useInfo();
// 点击count+100
const handler = () => {
  useInfoStore.changeNum();
};
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 200px;
  background-color: pink;
}
</style>
