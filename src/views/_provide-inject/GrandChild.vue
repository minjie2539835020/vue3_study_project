<template>
  <div class="grandChild">
    <h1>孙组件-----{{ car }}</h1>
    <button @click="handler">点击修改</button>
  </div>
</template>

<script setup lang="ts">
// 注入组件组件提供的数据
import { inject } from "vue";
let car: any = inject("CAR");
console.log("祖先传过来的数据:", car);
// 点击修改数据
const handler = () => {
  car.value = "自行车";
};
</script>

<style scoped lang="less">
.grandChild {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
