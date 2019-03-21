//  首页路由
const express = require('express');
const logicHome = require('../logic/logicHome.js'); //  引入相对于的逻辑

const router = express();

//  模拟接口
router.get('/getListData', (req,res) =>{
  logicHome.getListData(req, res);
})

