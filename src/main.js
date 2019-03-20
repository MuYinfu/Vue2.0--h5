// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 导入路由
import { post, get, patch, put } from './libs/axios'  // 全局封装请求
import Mint from 'mint-ui'  // 导入ui组件
import 'mint-ui/lib/style.css'  // 导入uicss
import FastClick from 'fastclick'


Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.use(Mint)
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
window.addEventListener('popstate',function (e) {
  router.togoback()
},false)
window.onresize = () =>{
  /**
   * 逻辑为-----
   * 当前窗口宽度/当前字体大小 == 设计图大小/设计图字体大小
   */

  let num=window.screen.width
  if(num >= 640){
    console.log(num)
    num = 640
  }
  console.log(num)
  let sum=num*16
  window.document.querySelector('html').style.fontSize=sum/375+'px'
}
