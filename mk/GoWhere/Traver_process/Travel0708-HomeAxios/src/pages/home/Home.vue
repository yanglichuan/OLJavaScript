<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return {
      city: '',
      swiperList: [],
      recommendList: [],
      weekendList:[],
      iconList:[]
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      console.log(res.data)
      const json = res.data;
      console.log(json);
      console.log(json.ret);
      console.log(json.data);
      if(json.ret && json.data){
        const data = json.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
        this.iconList = data.iconList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  },
}
</script>

<style lang="">

</style>
