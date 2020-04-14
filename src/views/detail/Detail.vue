<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="dnav"></detail-nav-bar>
    <better-scroll class="detail-wrapper" ref="bscroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :banners="topImages"></detail-swiper>
      <detail-base-info :base-info="baseInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-item-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-item-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
    </better-scroll>
    <back-to-top v-show="isShowBtt" @click.native="bttClick"></back-to-top>
    <detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
    <!-- <toast message="测试测试"></toast> -->
  </div>
</template>

<script>
import { getDetailData, getRecommendData, Items } from "@/network/detail";
import { debounce } from "@/common/utility";
import { backToTop } from '@/common/mixins'

import BetterScroll from "@/components/better-scroll/BetterScroll";
// import Toast from "@/components/toast/Toast";

import DetailNavBar from "./child-comps/DetailNavBar";
import DetailSwiper from "./child-comps/DetailSwiper";
import DetailBaseInfo from "./child-comps/DetailBaseInfo";
import DetailShopInfo from "./child-comps/DetailShopInfo";
import DetailItemInfo from "./child-comps/DetailItemInfo";
import DetailParamInfo from "./child-comps/DetailParamInfo";
import DetailCommentInfo from "./child-comps/DetailCommentInfo";
import DetailRecommend from "./child-comps/DetailRecommend";
import DetailTabBar from "./child-comps/DetailTabBar";

export default {
  name: "Detail",
  mixins: [backToTop],
  data() {
    return {
      refresh: null,
      getOffsetTop: null,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      blockOffsetTops: [],
      currentIndex: 0
    };
  },
  methods: {
    imgLoad() {
      this.refresh();
      this.getOffsetTop();
    },
    titleClick(index) {
      this.$refs.bscroll.scroll.scrollTo(0, -this.blockOffsetTops[index], 500);
    },
    scroll(position) {
      this.isShowBtt = Math.abs(position.y) > 1000;
      let y = Math.abs(position.y);
      let length = this.blockOffsetTops.length;
      for(let i = 0; i < length - 1; i++) {
        if(this.currentIndex != i) {
          // if(i != length - 1 && y >= this.blockOffsetTops[i] && y < this.blockOffsetTops[i + 1]) {
          //   this.currentIndex = i;
          //   this.$refs.dnav.currentIndex = this.currentIndex;
          // }else if(i == length - 1 && y >= this.blockOffsetTops[i]) {
          //   this.currentIndex = i;
          //   this.$refs.dnav.currentIndex = this.currentIndex;
          // }
          if(y >= this.blockOffsetTops[i] && y < this.blockOffsetTops[i + 1]) {
            this.currentIndex = i;
            this.$refs.dnav.currentIndex = this.currentIndex;
          }
        }
      }
    },
    addToCart() {
      const product = {};
      product.iid = this.$route.params.iid;
      product.img = this.topImages[0];
      product.title = this.baseInfo.title;
      product.desc = this.detailInfo.desc;
      product.price = this.baseInfo.nowPrice;
      // this.$store.commit({
      //   type: 'addCart',
      //   product
      // })
      this.$store.dispatch('addProduct', product).then(res => {
        this.$toast.show(res);
      })
    }
  },
  created() {
    getDetailData(this.$route.params.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      this.baseInfo = new Items(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopInfo = res.result.shopInfo;
      this.detailInfo = res.result.detailInfo;
      this.paramInfo = res.result.itemParams;
      res.result.rate.cRate
        ? (this.commentInfo = res.result.rate.list[0])
        : (this.commentInfo = {});
    });
    getRecommendData().then(res => {
      this.recommend = res.data.list;
    });
  },
  mounted() {
    this.refresh = debounce(this.$refs.bscroll.refresh, 100);
    this.getOffsetTop = debounce(() => {
      this.blockOffsetTops = [];
      this.blockOffsetTops.push(0);
      this.blockOffsetTops.push(this.$refs.param.$el.offsetTop);
      this.blockOffsetTops.push(this.$refs.comment.$el.offsetTop);
      this.blockOffsetTops.push(this.$refs.recommend.$el.offsetTop);
      this.blockOffsetTops.push(Number.MAX_SAFE_INTEGER);
    }, 100);
  },
  components: {
    BetterScroll,
    // Toast,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailItemInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommend,
    DetailTabBar
  }
};
</script>

<style>
#detail {
  position: relative;
  z-index: 9;
}

.detail-wrapper {
  overflow: hidden;
  height: calc(100vh - 93px);
  background-color: #fff;
}
</style>