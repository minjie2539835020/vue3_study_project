<template>
  <div class="parent">
  这是home组件
  <Child :info="111"/>
  </div>
</template>

<script setup lang="ts">
  import Child from './Child.vue'
  
</script>

<style scoped>
  .parent{
    background: yellow;
  }
</style>