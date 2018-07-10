<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe697;</div>
      </div>
      <div class="header-input">
          <span class="iconfont icon-search"></span>
          输入城市/景点/游玩主题
      </div>
      <div class="header-right">
          城市
          <span class="iconfont arrow-icon">&#xe6a6;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!-- scoped 局部样式 -->
<style lang="stylus" scoped>
/* reset.css中设置了html总体字符大小为50px 双倍图为*2 1rem=100px */
@import "~styles/varibles.styl"
/*组件中使用别名 别名前需加~ 波浪线*/
.header
  display flex
  line-height .86rem
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
 .header-input
    flex 1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left .2rem
    background-color #fff
    border-radius .1rem
    padding-left .2rem
    color #ccc
  .header-right
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      margin-left -.04rem
</style>
