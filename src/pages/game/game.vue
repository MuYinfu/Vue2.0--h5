<template>
  <div class='warp'>
    <!--拖拽区-->
    <section class='Drag'>
      <ul class='Drag_ul'>
        <li v-for='(item,index) in formData' class='Drag_ul_li' :key='index' @click='getElementMove(index)'>
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
  var oL, oT, maxW, maxH, oLeft, oTop;
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
          let ele = document.querySelectorAll('.Drag_ul_li')[index];
           maxW = document.body.clientWidth-ele.offsetWidth;
           maxH = document.body.clientHeight-ele.offsetHeight;
          //  按下
          ele.addEventListener('touchstart', evt => {
            let touch = evt.targetTouches[0];
            this.elementLocaton = ele.getBoundingClientRect();
            evt.preventDefault();
            oL = touch.clientX - ele.offsetLeft;
            oT = touch.clientY - ele.offsetTop;
          },false)

          //  移动
          ele.addEventListener('touchmove', evt => {
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
              /**
               * 元素位置-元素宽高度一半== 鼠标一直在中间
               */
              ele.style.left = oLeft/16 + 'rem';
              ele.style.top = oTop/16 + 'rem';
            }
          },false)

          //  结束
          ele.addEventListener('touchend', evt => {
            evt.preventDefault();
            ele.style.top = this.elementLocaton.y/16 +'rem';
            ele.style.left = this.elementLocaton.x/16 + 'rem';
            this.elementLocaton = '';
          })
        }

      },
      created(){
        _this = this;
        const arr = document.querySelectorAll('recovery_ul_li')
          Array.from(arr).map(item => {
          this.recoverydata.push(item.getBoundingClientRect());
          console.log(this.recoverydata)
        })
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
