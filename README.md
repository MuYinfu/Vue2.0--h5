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
      json-server--数据过滤
        [
            {
                "id": 0,
                "title": "元小总小把清保住影办历战资和总由",
                "desc": "共先定制向向圆适者定书她规置斗平相。要广确但教金更前三响角面等以白。眼查何参提适",
                "tag": "值集空",
                "views": 3810,
                "images": [
                    "http://dummyimage.com/200x100/79f2a5&text=别角置",
                    "http://dummyimage.com/200x100/f28279&text=收面几容受取",
                    "http://dummyimage.com/200x100/7993f2&text=做件"
                ]
            },
            {
                "id": 1,
                "title": "物器许条对越复术",
                "desc": "方江周是府整头书生权部部条。始克识史但给又约同段十子按者感律备。关长厂平难山从合",
                "tag": "分七眼术保",
                "views": 4673,
                "images": [
                    "http://dummyimage.com/200x100/79f2a5&text=别角置"
                ]
            },
            {
                "id": 2,
                "title": "但学却连质法计性想般最",
                "desc": "以群亲它天即资几行位具回同务度。场养验快但部光天火金时内我。任提教毛办结论感看还",
                "tag": "响六",
                "views": 4131,
                "images": [
                    "http://dummyimage.com/200x100/79f2a5&text=别角置",
                    "http://dummyimage.com/200x100/f28279&text=收面几容受取",
                    "http://dummyimage.com/200x100/7993f2&text=做件"
                ]
            },
            ...
            {
                "id": 99,
                "title": "则群起然线部其深我位价业红候院",
                "desc": "为高值务须西生型住断况里听。志置开用她你然始查她响元还。照员给门次府此据它后支越",
                "tag": "何你",
                "views": 2952,
                "images": [
                    "http://dummyimage.com/200x100/79f2a5&text=别角置"
                ]
            }
        ]
        1.属性值(Filter)
          使用 . 操作对象属性值
          
          // 获取图片数量为3，且标签字数为2的新闻
          
          GET /news?images.length=3&tag.length=2
          
          
        2.分割(Slice)
          使用 _start 和 _end 或者 _limit (response中会包含 X-Total-Count)
          
          // 获取id=10开始的5篇新闻
          
          GET /news?_start=10&_limit=5
          
          // 获取id=20开始,id=35结束的新闻
          
          GET /news?_start=20&_end=35
          
          
        3.排序(Sort)
          使用 _sort 和 _order (默认使用升序(ASC))
          
          // 按照浏览数量降序排列
          
          GET /news?_sort=views&_order=DESC
          
          
        4.运算符(Operators)
          使用 _gte 或 _lte 选取一个范围
          
          // 选取浏览量在2000-2500之间的新闻
          
          GET /news?views_gte=2000&views_lte=2500
          使用 _ne 排除一个值
          
          // 选择tag属性不是 "国际新闻" 的分类
          
          GET /news?tag_ne=国际新闻
          使用 _like 进行模糊查找 (支持正则表达式)
          
          // 查找title中含有 "前端" 字样的新闻 
          
          GET /news?title_like=前端
          
          
        5.全文检索(Full-text search)
          使用 q，在对象全部value中遍历查找包含指定值的数据
          
          // 查找新闻全部字段包含 "强拆" 字样的数据
          
          GET /news?q=强拆
          
        
        6.关系图谱(Relationships)
          获取包含下级资源的数据, 使用 _embed
          
          GET /news?_embed=comments
          GET /news/1?_embed=comments
          获取包含上级资源的数据, 使用 _expand
          
          GET /news?_expand=post
          GET /news/1?_expand=post
     

------------------
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
