<template>
  <div class="Child">
    <strong>钱数:{{ props.modelValue }}</strong>
    <button @click="asyncData">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
let props = defineProps(['modelValue'])
let $emit = defineEmits(['update:modelValue'])
const asyncData = () => {
     $emit('update:modelValue',props.modelValue+100)
  }
</script>

<style scoped lang="less"> 
.Child{
  width: 600px;
  height: 200px;
  background-color: pink;
}
</style>