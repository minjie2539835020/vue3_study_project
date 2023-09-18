<template>
  <div class="son2" >
    <p>event2</p>
    <button @click="handler">点击我触发自定义事件</button>
  </div>
</template>

<script setup lang="ts">
const $emit = defineEmits(['xxx'])
    console.log('$emit',$emit);
  const handler = () => {
    $emit('xxx','东风航母','捣蛋')
  }

</script>

<style scoped>
  .son2{
     width: 500px;
     height: 200px;
     background: pink; 
  }
</style>