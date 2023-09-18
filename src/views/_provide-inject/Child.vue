<template>
  <div class="child">
    <h1>子组件</h1>
    <GrandChild />
  </div>
</template>

<script setup lang="ts">
// 引入孙组件
import GrandChild from "./GrandChild.vue";
</script>

<style scoped lang="less">
.child {
  width: 300px;
  height: 300px;
  background-color: skyblue;
}
</style>
