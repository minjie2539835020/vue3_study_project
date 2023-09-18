<template>
  <div>
    <el-button :="$attr"></el-button>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

let $attr = useAttrs()
console.log('$attrs:', $attr);

</script>

<style scoped>

</style>