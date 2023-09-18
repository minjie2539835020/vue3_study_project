<template>
  <div class="bus-son1">
    <strong>我是bus子组件1</strong>
  </div>
</template>

<script setup lang="ts">
  // 引入bus对象
import $bus from '../../bus/index'
// 引入onMounted钩子函数
import { onMounted} from 'vue';
// 当组件挂载完毕的时候 , 当前组件绑定一个事件 , 接受将来兄弟组件传递的数据
onMounted(() => {
  // 第一个参数时间类型  第二个参数是事件回调
  $bus.on('car', (car) => {
    console.log('car:', car);
  })
})
</script>

<style scoped lang="less">
.bus-son1{
  width: 500px;
  height: 500px;
  background: red;
}
</style>