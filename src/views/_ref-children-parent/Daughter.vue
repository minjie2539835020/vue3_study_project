<template>
  <div class="daughter">
    <h1>Daughter: {{ money }}</h1>
    <button @click="handler($parent)">点击获取父组件</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 定义钱数
const money = ref(1000);
// 点击获取父组件
const handler = (parent) => {
  console.log("parent:", parent.parentMoney);
  money.value += 1000;
  parent.parentMoney -= 1000;
};
</script>

<style scoped>
.daughter {
  width: 300px;
  height: 200px;
  background-color: hotpink;
}
</style>
