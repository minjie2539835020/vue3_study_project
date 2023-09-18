<template>
  <div class="parent">
    <h1>provide和inject-----{{ car }}</h1>
    <hr />
    <Child />
  </div>
</template>

<script setup lang="ts">
// 引入子组件
import Child from "./Child.vue";
// vue3提供provide(提供)与inject(注入), 可以实现隔辈组件传递数据
import { ref, provide } from "vue";
// 定义属性
let car = ref("法拉利");
// 祖先组件给后代组件提供数据
// 两个参数:1.提供数据的key  2.提供的数据
provide("CAR", car);
</script>

<style scoped lang="less">
.parent {
  height: 100vh;
  background-color: greenyellow;
}
</style>
