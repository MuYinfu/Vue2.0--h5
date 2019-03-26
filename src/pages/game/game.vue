<template>
  <div class='warp'>
    <!--拖拽区-->
    <section class='Drag'>
      <ul class='Drag_ul'>
        <li v-for='(item,index) in formData' class='Drag_ul_li' :key='index' @click.stop.prevent='getElementMove(index)'>
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
  var oL, oT, maxW, maxH, oLeft, oTop, htmlFontSize;
  var _this;
    export default {
      name: "game",
      data(){
          return{
            elementLocaton:{},  // 文件初始化位置
            baseData:[1,2,3], //  回收站
            formData:[1,2,3,1,2,3], //  文件
            recoverydata:[] //  存储的是回收站初始的位置

          }
      },
      methods:{
        // 元素移动事件
        getElementMove: function (index) {
          htmlFontSize = window.document.querySelector('html').style.fontSize;
          htmlFontSize.slice(0,htmlFontSize.length-2);
          let ele = document.querySelectorAll('.Drag_ul_li')[index];
           maxW = document.body.clientWidth-ele.offsetWidth;
           maxH = document.body.clientHeight-ele.offsetHeight;
          //  按下
          ele.addEventListener('touchstart', evt => {
            evt.preventDefault();
            let touch = evt.targetTouches[0];
            this.elementLocaton = ele.getBoundingClientRect();
            console.log(this.elementLocaton);
            oL = touch.clientX - ele.offsetLeft;
            oT = touch.clientY - ele.offsetTop;
          },false)

          //  移动
          ele.addEventListener('touchmove', evt => {
            htmlFontSize = window.document.querySelector('html').style.fontSize;
            htmlFontSize.slice(0,htmlFontSize.length-2);
            evt.preventDefault();
            if(evt.targetTouches.length == 1){
              let touch = evt.targetTouches[0];
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
                // console.log(this.elementLocaton)
              if(oTop >= this.recoverydata[0].y-this.elementLocaton.height && oLeft >= this.recoverydata[0].x-this.elementLocaton.x && oLeft<= this.recoverydata[0].x*2){
                console.log('这里是第一个垃圾桶')
              }else if(oTop >= this.recoverydata[0].y-this.elementLocaton.height && oLeft >= this.recoverydata[1].x - this.recoverydata[0].x*2 && oLeft<= this.recoverydata[2].x - this.recoverydata[1].width){
                console.log('这里是第二个垃圾桶')
              }else if(oTop >= this.recoverydata[0].y-this.elementLocaton.height && oLeft >= this.recoverydata[2].x-40){
                console.log('这里是第三个垃圾桶')
              }
              /**
               * 元素位置-元素宽高度一半== 鼠标一直在中间
               */

              ele.style.left = oLeft/parseFloat(htmlFontSize) + 'rem';
              ele.style.top = oTop/parseFloat(htmlFontSize) + 'rem';
            }
          },false)

          //  结束
          ele.addEventListener('touchend', evt => {
            evt.preventDefault();
            console.log(this.elementLocaton);
            ele.style.top = this.elementLocaton.y/parseFloat(htmlFontSize) +'rem';
            ele.style.left = this.elementLocaton.x/parseFloat(htmlFontSize) + 'rem';
            this.elementLocaton = '';
          })
        },
        getrecovery:function () {
          const arr = document.querySelectorAll('.recovery_ul_li');
          Array.from(arr).map(item => {
            this.recoverydata.push(item.getBoundingClientRect());
            console.log(this.recoverydata)
          })
        }

      },
      created(){
        _this = this;
      },
      mounted(){
        this.getrecovery();
      }
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
      .Drag_ul_li:first-child{
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(20);
        .left(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li:nth-child(2){
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(20);
        .right(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li:nth-child(3){
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(160);
        .left(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li:nth-child(4){
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(160);
        .right(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li:nth-child(5){
        background: red;
        .w(150);
        .h(100);
        position: absolute;
        .top(300);
        .left(20);
        line-height: 100/16rem;
      }
      .Drag_ul_li:nth-child(6){
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
