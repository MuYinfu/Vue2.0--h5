<template>
  <div class="hello">
    <div class="titleDiv">{{msg}}</div>
    <div class='helloDiv' v-for='item in formData'>
      {{item.courseName}}
    </div>
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
    getListData(){

    }
  },
  created(){
    _this = this;
    getListData();
  }
}
function getListData() {
   _this.$get('/getListData')
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
    .margin(10,10,10,10)
  }
  .helloDiv{
   .mt(10)
  }

</style>
