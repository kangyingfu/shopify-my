<script lang="ts" setup>
import { str, num, fn } from '@/tsType/type';
import { Ref, ref, reactive } from 'vue';
type arr = (number | string)[];
type obj = {
  data: arr;
};
const inputvalue: Ref<HTMLElement | str> = ref('');
const data: obj = reactive({ data: [1, 2] });
const a: str = '123';
console.log(a, '的杀杀杀', data);
const aa: fn = function (a, b) {
  return a + b;
};
aa(1, 2);
</script>
<template>
  <div>
    <input type="text" v-model="inputvalue" />
    <div>{{ inputvalue }}</div>
  </div>
</template>
<style lang="less" scoped></style>
