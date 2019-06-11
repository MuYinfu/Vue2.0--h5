<template>
    <div>
      <canvas id='canvas_div'></canvas>
    </div>
</template>

<script>
  var this_;
    export default {
        name: "PictureSynthesis",
      data(){
          return {

        }
      },
      created(){
          this_ = this;
      }
    }

  let bg = {
    width: 315,
    height: 420,
    src: 'https://file.dayutang.cn/2019/05/06/1557149372626.png'
  }
  let code = {
    width: 48,
    height: 48,
    src: 'https://file.dayutang.cn/2019/02/15/1550219422724.jpg'
  }

  let title = {
    width: 121,
    height: 40,
    src: 'https://file.dayutang.cn/2019/05/06/1557149272549.png'
  }
  let title_p = {
    name: '我是学霸，我怕谁',
    width: 128,
    height: 22,
    fontSize: 16
  }

  let title_h1 = {
    name: '新东方旗下大塘小鱼',
    width: 126,
    height: 20,
    fontSize: 14
  }

  let title_h2 = {
    name: '蹭课0元学 AI 1对1名师私塾课',
    width: 151,
    height: 17,
    fontSize: 12
  }

  var image1 = new Image();
  var image2 = new Image();
  var image3 = new Image();
  var image4 = new Image();
  var image5 = new Image();
  var image6 = new Image();

  image1.src = bg.src;
  image2.src = code.src;
  image3.src = title.src;

  let c = document.getElementById('canvas_div');
  let ctx = c.getContext("2d");
  image1.onload = function () {
    ctx.drawImage(image1, 0, 0, 300, 150);
    image2.onload = function(){
      ctx.drawImage(image2, 0, 0, 144, 48);
    }

    ctx.save();
    // ctx.arc(185, 1235, 65, 0, Math.PI * 2, false);
    // ctx.clip();
    // ctx.drawImage(image2, 120, 1171, userInfo.width, userInfo.height); // 在刚刚裁剪的园上画图
    // ctx.restore(); // 还原状态
    // ctx.font = "36px Georgia";
    // ctx.fillStyle = '#ffffff';
    // ctx.fillText(userInfo.name, 270, 1224);
  }
</script>

<style scoped lang='less'>
  @import "../../styles/index.less";
  @import "../../styles/variable.less";

  #canvas_div{
    .h(420);
    .w(315);
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
</style>
