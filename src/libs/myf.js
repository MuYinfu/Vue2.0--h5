(function () {
    function GirlFriend(name,age,occupation,stature) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.stature = stature;
      this.init();
    }
    GirlFriend.prototype = {
      constructor : GirlFriend,
      init(){
        this.toDo();
      },
      toDo(){
        let breakfast = ['煮粥','炸油条','磨豆浆','煮鸡蛋'];
        let lunch = ['西红柿炒鸡蛋','炒土豆','煮面条','大米饭','炒豆角','定外卖'];
        let dinner = ['水果沙拉','南瓜粥','小米粥','小炒肉'];

      },
      // 用来检测时间,来使对象帮你做饭
      cookTime(){
        setInterval(function () {
          if(this.getTime == 9){
            this.rd(0,4)
          }
        },3600000)
      },
      // 生成随机数
      rd(n, m){
        let c = m - n + 1;
        return Math.floor(Math.random() * c + n);
      },
      // 获取当前时间
      getTime(){
        let nowTime = new Date();
        let hours = nowTime.getHours();
        return hours;
      }

    }
})();
