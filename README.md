# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
------------------
    项目使用vue2.6 + vuex + axios + vueRouter + mint-ui  简单搭建
      项目使用easymock模拟数据
    
    build---webpack配置文件

    config---项目配置目录

    node_modules---依赖文件


    src---项目主要文件
    
        assets---静态文件
      
        components---公共模块
      
        router---路由
            index.js---路由路口
        
        store---vuex状态管理
      
        pages---主要页面
      
        libs---公共方法文件
            axios---api请求配置文件
            
        style---公共样式模块
            base.less---全局css字体型号
            
            index.less---统一样式入口
            
            mixin.less---基本字体大小及算法
            
            reset.less---重置默认样式
            
            variable.less---定义主题颜色及基本样式
            
                使用方法：在每个组件里的style标签里引入index.less和variable.less
      

    static---静态文件目录

------------------
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
