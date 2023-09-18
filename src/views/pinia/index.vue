<template>
  <div class="parent">
    <h1>父组件</h1>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts">
// vuex: 集中式管理状态容器, 可以实现人已组建之间的通信
// 核心概念: state, mutations, actions, getters, models

// pinia: 集中式管理状态容器, 可以实现任意组件之间的通信
// 核心概念: state, actions, getters
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
</script>

<style scoped>
.parent {
  width: 500px;
  height: 600px;
  background-color: yellow;
}
</style>
