<script lang="ts" setup>
interface types {
  children?: types[];
  value: string;
}
import { ref, PropType, toRefs, defineProps, defineEmits } from 'vue';
const ab = ref<string>('');
// vue3源码 vue自带的传参类型
// const props = defineProps({
//   items: {
//     type: Array as PropType<types[]>,
//     require: true,
//   },
// });
// const { items = [{ value: '123' }] } = toRefs(props);
// ts语法
const props = defineProps<{
  items: types[];
}>();
const { items } = toRefs(props);
// 无ts写法
// defineEmits(['change']);
// 子传父事件 定义ts e代表事件
defineEmits<{
  (e: 'change', obj: types[]): void;
  (e: 'update', name: string): void;
}>();
// console.log(items, 'props');

// ?. 可选连
// !.  非空断言   一定有值才能用
// const yu = {
//   name: '',
// };
// yu!.name;
</script>
<template>
  <div v-for="(item, index) in items" :key="index">
    {{ item.value }}
    <digui-item v-if="item.children" :items="item.children"></digui-item>
  </div>
</template>
<style lang="less" scoped></style>
