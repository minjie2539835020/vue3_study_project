<template>
  <div class="child2">
    <p>{{ todoStore.arr }}---------{{ todoStore.total }}</p>
    <button @click="update">push</button>
  </div>
</template>

<script setup lang="ts">
import todos from "../../store/modules/todo";
const todoStore = todos();

const update = () => {
  todoStore.updateTodo();
};
</script>

<style scoped>
.child2 {
  width: 300px;
  height: 200px;
  background-color: skyblue;
}
</style>
