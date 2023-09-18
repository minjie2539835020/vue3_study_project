<template>
  <div class="modelParent">
     <!-- <el-button type="primary">Primary</el-button> -->
      <strong>v-model: 钱数{{ money }}</strong>
      <!-- <ChildModel1 :modelValue="money" @update:modelValue="handler"/>
       -->
       <!-- 对比上面是另外一种写法 v-model 相当于上面的modelValue 且必须是modelValue-->
      <ChildModel1 v-model="money"/>
      <hr>
      <!-- 同时绑定多个model -->
      <ChildModel2 v-model:pageNo="pageNo" v-model:pageSize="pageSize" />
  </div>
</template>

<script setup lang="ts">
import ChildModel1 from './ChildModel1.vue';
import ChildModel2 from './ChildModel2.vue';
import { ref } from 'vue';
let money = ref(1000);

// const handler = (val:number) => {
//   money.value = val
// }

let pageNo = ref(1)
let pageSize = ref(30)
</script>

<style scoped lang="less">
.modelParent{
   width: 700px;
  height: 700px;
  background-color: aquamarine;
}
</style>