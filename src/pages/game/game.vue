<template>
  <div class='warp'>
    <!--拖拽区-->
    <section class='Drag'>
      <ul class='Drag_ul'>
        <li v-for='(item,index) in formData' :class='"Drag_ul_li" +index' :key='index' @touchstart.stop.prevent='getTouchstart(item,"Drag_ul_li"+index)' @touchmove.stop.prevent = 'getTouchmove()' @touchend.stop.prevent='getTouchend'>
          {{item}}
        </li>
      </ul>
    </section>

    <!--回收区-->
    <section class='recovery'>
        <ul class='recovery_ul'>
          <li class='recovery_ul_li' v-for='item in baseData'>
          {{item}}
          </li>
        </ul>
    </section>

  </div>
</template>

<script>
  import {commonFun} from "../../libs/common";
  var oL, oT, maxW, maxH, oLeft, oTop, htmlFontSize, touchX, touchY;
  var _this;
    export default {
      name: "game",
      data(){
          return{
            elementLocaton:{},  // 文件初始化位置
            baseData:[1,2,3], //  回收站
            formData:[1,2,3,1,2,3], //  文件
            recoverydata:[], //  存储的是回收站初始的位置
            ele:'',

          }
      },
      methods:{
        getrecovery:function () {
          const arr = document.querySelectorAll('.recovery_ul_li');
          Array.from(arr).map(item => {
            this.recoverydata.push(item.getBoundingClientRect());
            console.log(this.recoverydata)
          })
        },
        getTouchstart:function (item,Class) {
          //  获取当前拖动的元素
          this.ele = document.getElementsByClassName(Class)[0];
          this.ele.style.zIndex = 1;
          //  获取元素最大的活动范围
          maxW = document.body.clientWidth-this.ele.offsetWidth;
          maxH = document.body.clientHeight-this.ele.offsetHeight;
          //  一只手指
          var  touch = event.targetTouches[0];
          console.log(touch)
          //  获取当前的元素的位于最近绝对定位父元素的位置
          this.elementLocaton = this.ele.getBoundingClientRect();
          console.log(this.elementLocaton);
          //  获取当前鼠标位于元素的位置
          //
          oL = touch.clientX - this.ele.offsetLeft;
          oT = touch.clientY - this.ele.offsetTop;
          // this.eleData = item;

        },

        //  移动
        getTouchmove:function(){
          if(event.targetTouches.length == 1){
            var touch = event.targetTouches[0];
            //  手指的位置
            touchX = touch.clientX;
            touchY = touch.clientY;
            // console.log(touchX,touchY)
            oLeft = touch.clientX - oL;
            oTop = touch.clientY - oT;
            if(oLeft<0){
              oLeft=0;
            }else if (oLeft>=maxW) {
              oLeft=maxW;
            }
            if(oTop<0){
              oTop=0;
            }else if (oTop>=maxH) {
              oTop=maxH;
            }
            this.ele.style.left = oLeft + 'px';
            this.ele.style.top = oTop + 'px';
            if(touchX >= this.recoverydata[0].x && touchX <= this.recoverydata[0].x + this.recoverydata[0].width && touchY >= this.recoverydata[0].y && touchY <= this.recoverydata[0].y + this.recoverydata[0].height){
              console.log('水桶1')
            }else if(touchX >= this.recoverydata[1].x && touchX <= this.recoverydata[1].x + this.recoverydata[1].width && touchY >= this.recoverydata[1].y && touchY <= this.recoverydata[1].y + this.recoverydata[1].height){
              console.log('水桶2')
            }else if(touchX >= this.recoverydata[2].x && touchX <= this.recoverydata[2].x + this.recoverydata[2].width && touchY >= this.recoverydata[2].y && touchY <= this.recoverydata[2].y + this.recoverydata[2].height){
              console.log('水桶3')
            }
          }
        },

        //  结束
        getTouchend:function(){
          if(touchX >= this.recoverydata[0].x && touchX <= this.recoverydata[0].x + this.recoverydata[0].width && touchY >= this.recoverydata[0].y && touchY <= this.recoverydata[0].y + this.recoverydata[0].height){
            reductionFl();
          }else if(touchX >= this.recoverydata[1].x && touchX <= this.recoverydata[1].x + this.recoverydata[1].width && touchY >= this.recoverydata[1].y && touchY <= this.recoverydata[1].y + this.recoverydata[1].height){
            reductionFl();
          }else if(touchX >= this.recoverydata[2].x && touchX <= this.recoverydata[2].x + this.recoverydata[2].width && touchY >= this.recoverydata[2].y && touchY <= this.recoverydata[2].y + this.recoverydata[2].height){
            reductionFl();
          }else {
            reductionFl();
          }
        },

      },
      created(){
        _this = this;
      },
      mounted(){
        this.getrecovery();
      }
    }

  //  配对游戏初始化
  function reduction() {
    setTimeout(function () {
      var game5_top = document.getElementsByClassName('game5_top')[0];
      var game5_bot = document.getElementsByClassName('game5_bot')[0];
      for(var i =0 ;i<game5_top.children.length; i++){
        game5_top.children[i].classList.remove('liHover');
        game5_top.children[i].style.opacity = '1';
        game5_bot.children[i].classList.remove('liHover');
        game5_bot.children[i].style.opacity = '1';
      }
    },300)

  }

  //  分类游戏还原位置
  function reductionFl() {
    _this.ele.style.top = _this.elementLocaton.y +'px';
    _this.ele.style.left = _this.elementLocaton.x + 'px';
    _this.elementLocaton = '';
    _this.ele.style.zIndex = 0;
  }

</script>

<style lang='less'>
  @import "../../styles/index.less";
  @import "../../styles/variable.less";
.warp{
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  position: absolute;
  .Drag{
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    .w(375);
    .h(500);
    .Drag_ul{
      width: 100%;
      height: 100%;
      .Drag_ul_li0{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(20);
        .left(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li1{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(20);
        .right(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li2{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(160);
        .left(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li3{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(160);
        .right(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li4{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(300);
        .left(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li5{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(300);
        .right(20);
        line-height: 100/16rem;
      }

    }
  }
  .recovery{
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    .w(375);
    .mt(30);
    .mb(30);
    .recovery_ul{
      display: flex;
      flex-direction: row;
      flex-wrap:  nowrap;
      justify-content: space-around;
      align-items: center;

      .recovery_ul_li{
        width: 27%;
        .h(100);
        display: flex;
        border: 1/16rem solid black;
        justify-content: center;
        line-height: 100/16rem;
      }
    }
  }
}
</style>
