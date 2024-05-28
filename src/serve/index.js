const { json } = require('express');
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
app.ws('/mySocketUrl', (ws, req) => {
  console.log('连接成功', ws);

  //   ws.send('来自服务端推送的消息');

  ws.on('message', function (msg) {
    ws.send(`收到客户端的消息为：${msg}，再返回去`);
  });

  // 使用定时器不停的向客户端推动消息
  let timer = setInterval(() => {
    ws.send(
      JSON.stringify({
        text: `服务端定时推送消息: ${new Date().getTime()}`,
        data: new Date().getTime(),
      }),
    );
  }, 1000);

  ws.on('close', function (e) {
    // console.log('连接关闭')
    clearInterval(timer);
    timer = null;
  });
});
app.listen(8500, (req, res) => {
  console.log('服务器启动了地址是localhost:8500');
});
