<template>
    <div class='warp' @click='getHellowWorld' v-cloak>
        {{msg}}
    </div>
</template>

<script>
  export default {
      name: "login",
    data() {
        return {
          msg: '登入成功！'
        }
    },
    methods:{
      getHellowWorld(){
        this.$router.push({path : '/'});
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
