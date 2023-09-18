<template>
  <div>
    <h1>ref和$parent: {{ parentMoney }}</h1>
    <button @click="handler">找son借10元</button>
    <Son ref="son" />
    <hr />
    <Daughter />
  </div>
</template>

<script setup lang="ts">
// ref: 可以获取真实的dom节点, 可以获取子组件实例vc
// $parent: 可以在子组件内部获取到父组件的实例
import Son from "./Son.vue";
import Daughter from "./Daughter.vue";
import { ref } from "vue";
// 定义钱数
let parentMoney = ref(1000);
// 对外暴露属性 , 子组件才可以获取到
defineExpose({
  parentMoney,
});
// 获取son组件的节点
let son = ref();

// 点击一下找子组件借10块钱
const handler = () => {
  parentMoney.value += 10;
  son.value.money -= 10;
};
</script>

<style scoped></style>
