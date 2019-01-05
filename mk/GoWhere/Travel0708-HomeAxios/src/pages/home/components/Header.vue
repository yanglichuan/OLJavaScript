<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入景点/酒店/美食
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont city-select">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .84rem
    background-color $bgColor
    color #fff
    .header-left
      width: .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      line-height .64rem
      height .64rem
      background #fff
      color #ccc
      border-radius .1rem
    .header-right
      width 1.28rem
      float right
      text-align center
      .city-select
        margin-left -.04rem
        font-size .24rem

</style>
