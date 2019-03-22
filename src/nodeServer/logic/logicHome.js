//  主要逻辑
const ConnectServer = require('../db/ConnectServer.js')  //  连接数据库

//  模拟接口
module.exports.getListData = function (req, res) {
  var sql = 'SELECT * FROM activity_distribution_recommend_prize_concat WHERE NUM = 100';
  ConnectServer.query(sql, (err ,result) =>{
      if(err){
        return err;
      }
      if(result.length <= 0) {
        return new Error();
      }
      res.render('index.html',{
        user: req.session.user,
        data: req.result
      })
  })
}
