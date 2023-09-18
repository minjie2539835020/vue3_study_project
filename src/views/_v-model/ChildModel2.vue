<template>
  <div>
      <strong>v-model2</strong>
      <p>接收到的数据:{{ pageNo}}--{{ pageSize }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps(['pageNo','pageSize'])
</script>

<style scoped>

</style>