/*
* 简单的node服务器搭建--初衷温习一下node知识及sql语句
* 使用前请确认全局已安装 node 及 express
*
* */

const express = require('express');
const app = express();
const home = require('./router/home.js'); //  首页逻辑

//  注册路由
app.use(home);

app.listen(8080, () => {
  console.log('running');
})
