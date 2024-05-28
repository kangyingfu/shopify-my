<script lang="ts" setup>
import { ref } from 'vue';
let a = ref(0);
let socket = new WebSocket('ws://localhost:8500/mySocketUrl');
console.log(socket, 'socket');
socket.onopen = function () {
  console.log('链接打通了');
};
socket.onclose = function () {
  console.log('链接关闭了');
};
socket.onerror = function () {
  console.log('链接出错了');
};
socket.onmessage = function (msg) {
  let obj = JSON.parse(msg.data);
  a.value = obj.data;
  console.log(a, '链接消息', msg);
};
</script>

<template>
  <div>{{ a }}</div>
</template>

<style lang="less" scoped></style>
