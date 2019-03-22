// 连接数据库
const mysql = require('mysql');
let ConnectServer = mysql.createConnection({
  host: '192.168.2.209',
  user: 'FishPond',
  password: 'FishPond',
  database: 'yutang_test',
  port:'3306'
});
ConnectServer.connect( err => {
  if(err){
    console.log('----' + err );
    return;
  }
  console.log('服务器连接成功');
});
// ConnectServer.on('error', err => {
//   if(err.code === 'PROTOCOL_CONNECTION_LOST'){
//     console.log('服务器连接超时');
//     ConnectServer.connect();
//   }else {
//     console.log(err);
//   }
// })
// ConnectServer.end( err => {
//   if(err){
//     console.log('----', + err);
//     return;
//   }
//   console.log('已关闭服务器连接');
// })
module.exports = ConnectServer;
