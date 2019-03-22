<template>
    <div class='warp' @click='getHellowWorld'>
        {{msg}}
    </div>
</template>

<script>
  export default {
      name: "login",
    data() {
        return {
          msg: '这里是登入路由！'
        }
    },
    methods:{
      getHellowWorld(){
        this.$router.push({path : '/'})
      }
    },
    watch:{

    }
  }
</script>

<style lang='less'>
@import "../../styles/index.less";
@import "../../styles/variable.less";

.warp{
  .mt(20)
}
</style>
