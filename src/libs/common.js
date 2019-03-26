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

// 导出全局方法
export {commonFun};

