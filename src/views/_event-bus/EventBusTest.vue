<template>
  <div class="bus">
    <Child1/>
    <Child2/>
  </div>
</template>

<script setup lang="ts">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
</script>

<style scoped lang="less">
.bus{
  width: 1200px;
  height: 100vh;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
}
</style>