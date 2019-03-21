//  主要逻辑
const ConnectServer = require('../db/ConnectServer')  //  连接数据库

//  模拟接口
module.exports.getListData = function (req, res) {
  var sql = 'SELECT * FROM test_home WHERE User_id = 4';
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
