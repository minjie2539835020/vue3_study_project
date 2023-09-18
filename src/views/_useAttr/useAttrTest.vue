<template>
  <div>
    <h1>useAttrs 组件间的通信方式</h1>
     <el-button type="primary" size="small" title="编辑按钮" :icon="Check">Primary</el-button>
     <hr>
    <ChildAttr type="primary" size="small" title="编辑按钮" :icon="Check" @click="handler" />
  </div>
</template>

<script setup lang="ts">
// vue3提供一个方法useAttrs, 可以获取组件上的属性与事件!!!!!
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import ChildAttr from './ChildAttr.vue'

const handler = () => {
  alert('test')
}
</script>

<style scoped>

</style>