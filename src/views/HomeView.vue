<script lang="ts" setup>
// 这是递归组件
import { ref } from 'vue';
import Digui from '../components/digui/digui-item.vue';
const data = ref([
  {
    value: '111',
    children: [
      {
        value: '222',
        children: [
          {
            value: '333',
            children: [
              {
                value: '444',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
]);
// const ws = new WebSocket('服务器地址');
// ws.onopen = function () {
//   // 链接成功后的方法
// };
// ws.onerror = function () {
//   // 链接失败的方法
// };
// ws.onmessage = function (msg) {
//   // 接收的数据
// };
</script>

<template>
  <Digui :items="data"></Digui>
</template>

<style lang="less" scoped></style>
