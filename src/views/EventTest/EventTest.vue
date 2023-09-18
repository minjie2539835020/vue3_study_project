<template>
  <div>
    <Event1 @click="handler1"/>
    <Event2 @xxx="handler2"/>
  </div>
</template>

<script setup lang="ts">
  import Event1 from "./Event1.vue";
  import Event2 from './Event2.vue'

  // 父组件EvenTest给Event1传递数据
  const handler1 = () => {
    console.log('触发了event1组件');
  }

  // 子组件Event2给父组件EventTest传递数据
  const handler2 = (param1:string,param2:string) => {
    console.log('接收到子组件的数据:',param1,param2);
    
  }

</script>

<style scoped>

</style> 