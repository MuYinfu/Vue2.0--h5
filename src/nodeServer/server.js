/*
* 简单的node服务器搭建--初衷温习一下node知识及sql语句
* 使用前请确认全局已安装 node 及 express  node服务器启动前确保已安装 中间件 body-parser
* 使用express-session 来实现登入验证
* 使用ejs 实现数据渲染
* */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');  //  引入中间件 在路由挂载前必须先挂载中间件，否则会报错
const session = require('express-session'); //  引入express-session 实现登入验证
const home = require('./router/routerHome.js'); //  首页路由

// 注册session
app.use(session({
  secret: 'secret', //  对session id 相关的cookie 进行签名
  resave: true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    maxAge: 1000 * 60 * 30,  //  设置session的有效时间--毫秒
  }
}))
// 注册body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  注册路由
app.use(home);

app.listen(3306, () => {
  console.log('running');
})
