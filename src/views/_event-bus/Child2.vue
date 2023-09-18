<template>
  <div class="child2">
    <strong>我是bus子组件2</strong>
    <hr>
    <button @click="send">点击我向child1传送数据</button>
  </div>
</template>

<script setup lang="ts">
// 引入bus对象
import $bus from '../../bus/index'
// 点击按钮回调
const send = () => {
  $bus.emit('car',{car:'法拉利'})
}
</script>

<style scoped lang="less">
.child2{
  width: 500px;
  height: 500px;
  background: yellow;
}
</style>