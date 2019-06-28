<template>
  <div class="hello" v-cloak>
    <div class="titleDiv">{{msg}}</div>
    <div class='helloDiv' v-for='item in formData'>
      {{item.courseName}}
    </div>
    <mt-button type="primary" class='loginBtn' @click='getLogin'>前往游戏页面</mt-button>
  </div>
</template>

<script>
  let _this;
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      formData:{},
    }
  },
  methods:{
    getLogin(){
      this.$router.push({path : '/game'});
    }
  },
  created(){
    _this = this;
    // getListData();
  }
}
function getListData() {
   _this.$get('/news')
     .then(res => {
       _this.formData  = res.list;
     })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  @import "../styles/index.less";
  @import "../styles/variable.less";
  .titleDiv{
    .w(375);
    .ma();

  }
  .helloDiv{
   .mt(10)
  }
  .loginBtn{
    .h(50);
    .w(200);
    .ma();
  }

</style>
