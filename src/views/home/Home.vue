<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tab-control class="fixed" ref="tabControlF" :titles="titles" @tabClick="tabClick" v-show="isShowTab"></tab-control>
    <better-scroll 
      class="home-wrapper" 
      ref="bscroll" 
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" @imgLoad="imgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control ref="tabControl" :titles="titles" @tabClick="tabClick"></tab-control>
      <good-list :goods="goods[currentType].list" @imageLoad="imageLoad"></good-list>
    </better-scroll>
    <back-to-top v-show="isShowBtt" @click.native="bttClick"></back-to-top>
  </div>
</template>

<script>
import { getHomeMultiData, getHomeGoodData } from "@/network/home";

import { debounce } from "@/common/utility";
import { backToTop } from '@/common/mixins'

import BetterScroll from "@/components/better-scroll/BetterScroll";
import TabControl from "@/components/tab-control/TabControl";
import GoodList from "@/components/good-list/GoodList";
import BackToTop from "@/components/back-to-top/BackToTop";

import HomeNavBar from "./child-comps/HomeNavBar";
import HomeSwiper from "./child-comps/HomeSwiper";
import HomeRecommend from "./child-comps/HomeRecommend";
import HomeFeature from "./child-comps/HomeFeature";

export default {
  mixins: [backToTop],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "上新", "热销"],
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      refresh: null,
      tabOffsetTop: 0,
      isShowTab: false,
      lastY: 0
    };
  },
  components: {
    BetterScroll,
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodList
  },
  methods: {
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlF.currentIndex = index;
    },
    scroll(position) {
      this.isShowBtt = Math.abs(position.y) > 1000;
      this.isShowTab = Math.abs(position.y) > this.tabOffsetTop;
    },
    pullingUp() {
      this.getHomeGood(this.currentType)
      this.$refs.bscroll.finishPullUp()
    },
    imageLoad() {
      this.refresh()
    },
    imgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },

    // 获取首页数据
    getHomeMulti() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取商品数据
    getHomeGood(type) {
      let page = this.goods[type].page + 1;
      getHomeGoodData(type, page).then(res => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.list);
      });
    }
  },
  activated() {
    // console.log('activated', this.lastY)
    this.$refs.bscroll.scroll.scrollTo(0, this.lastY, 0)
    this.$refs.bscroll.scroll.refresh()
  },
  deactivated() {
    this.lastY = this.$refs.bscroll.scroll.y
    // console.log('deactivated', this.lastY)
  },
  created() {
    this.getHomeMulti();
    this.getHomeGood("pop");
    this.getHomeGood("new");
    this.getHomeGood("sell");
  },
  mounted() {
    this.refresh = debounce(this.$refs.bscroll.refresh, 100)
  }
};
</script>

<style>
#home .home-wrapper {
  overflow: hidden;
  /* height: calc(100vh - 93px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

#home .tab-control.fixed {
  /* position: fixed;
  top: 44px;
  left: 0;
  right: 0; */
  position: relative;
  z-index: 9;
}
</style>