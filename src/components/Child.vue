<template>
  <div class="son">
    <h1>我是子组件</h1>
    <p>{{ info }}</p>
  </div>
</template>

<script setup lang="ts">
  const props =  defineProps(['info'])
  console.log(props);
  
</script>

<style scoped >
.son{
  /* width: 200px; */
  height: 200px;
  background: pink;
  
}
</style>