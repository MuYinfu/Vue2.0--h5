const commonFun = new Object();

// 全局封装pc移动判断
commonFun.goPAGE = () => {
  if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return 'h5';
  }
  else {
    return 'pc';
  }
}

//原生js获取其他兄弟元素
commonFun.siblings = (elm) => {
  var a = [];
  var p = elm.parentNode.children;
  for(var i =0,pl= p.length;i<pl;i++) {
    if(p[i] !== elm) a.push(p[i]);
  }
  return a;
}
// 导出全局方法
export {commonFun};

