<template>
  <div class="son">
    <h1>Son : {{ money }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// son的钱数
let money = ref(666);
// 组件内部数据对外关闭的 , 别人不能访问
// 如果想让外部访问需要通过defineExpose方法对外暴露
defineExpose({
  money,
});
</script>

<style scoped>
.son {
  width: 300px;
  height: 200px;
  background-color: skyblue;
}
</style>
