<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe697;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
  .header
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color: #fff
    background $bgColor
    font-size .32rem
    position relative
    .header-back
      /*text-align center*/
      font-size .4rem
      width .64rem
      position absolute
      top 0
      left 0
      color #fff
</style>
