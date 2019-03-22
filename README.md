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
        项目本来想使用typescript搭建，但是构造项目时webpack版本太低，升级很麻烦（我不会）所以没有引入
    
    build---webpack配置文件

    config---项目配置目录

    node_modules---依赖文件


    src---项目主要文件
    
        assets---静态文件
      
        components---公共模块
        
        nodeServer---node服务器---启动命令 nodemon server.js 启动node服务器---无法连接服务器已阉割（多次尝试未果）
            在js里面每个模块都相等于一个闭包，需要导出及引入
            db---连接服务器入口
            
            router---请求路由
            
            logic---主要项目逻辑
            
            server.js---node服务器
            
      
        router---路由
            index.js---路由路口
        
        store---vuex状态管理
      
        pages---主要页面
        
        jsonServer---假数据json-server 启动命令---json-server --watch db.json / npm run jsonServer
      
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
    
    项目搭建期间，后台假数据尝试了多种包含node/mock/easymock/json-server
    node---无法连接远程服务器阉割
    mock---mock不如easymock更简单 阉割
    easymock---待分配
    json-server---准备采取json-server 因为json-server更支持axios的接口模式

------------------
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
