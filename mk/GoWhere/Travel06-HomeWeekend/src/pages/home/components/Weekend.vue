<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="index">
        <div class="item-img-wapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界水奥雪世界'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界水奥雪世界'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界水奥雪世界'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界水奥雪世界'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界水奥雪世界'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '水奥雪世界',
          desc: '水奥雪世界水奥雪世界水奥雪世界'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .weekend-title
    height .8rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wapper
    overflow hidden
    height 0
    padding-bottom 33%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      font-size .2rem
      color: #ccc
      ellipsis()

</style>
