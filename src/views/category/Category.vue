<template>
  <div id="category">
    <category-nav-bar></category-nav-bar>
    <div class="category-main">
      <category-tab :category-tab="categoryTab" @changeTab="changeTab"></category-tab>
      <div class="category-content">
        <better-scroll class="cc-wrapper" ref="bscroll">
          <category-sub :category-sub="categoryContent[currentIndex].sub"></category-sub>
          <tab-control :titles="titles" @tabClick="tabClick" ref="tab"></tab-control>
          <good-list :goods="categoryContent[currentIndex][currentType]" @imgLoad="imgLoad"></good-list>
        </better-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCategoryData,
  getSubcategoryData,
  getCategoryDetailData
} from "@/network/category";

import BetterScroll from "@/components/better-scroll/BetterScroll";
import TabControl from '@/components/tab-control/TabControl'
import GoodList from '@/components/good-list/GoodList'

import CategoryNavBar from "./child-comps/CategoryNavBar";
import CategoryTab from "./child-comps/CategoryTab";
import CategorySub from "./child-comps/CategorySub";

export default {
  data() {
    return {
      categoryTab: [],     
      categoryContent: [],
      titles: ["流行", "上新", "热销"],
      types: ['pop', 'new', 'sell'],
      currentIndex: 0,
      currentType: 'pop'
    };
  },
  components: {
    BetterScroll,
    CategoryNavBar,
    CategoryTab,
    CategorySub,
    TabControl,
    GoodList
  },
  methods: {
    changeTab(index) {
      this.currentIndex = index
      this.$refs.bscroll.scroll.scrollTo(0, 0, 500)
      this.$refs.tab.currentIndex = 0
    },
    tabClick(index) {
      this.currentType = this.types[index]
    },
    imgLoad() {
      this.$refs.bscroll.refresh();
    }
    
  },
  created() {
    getCategoryData().then(res => {
      this.categoryTab = res.data.category.list;
      this.categoryTab.map(item => {
        let c = {}
        c.maitKey = item.maitKey
        getSubcategoryData(item.maitKey).then(res => {
          c.sub = res.data.list
        })
        getCategoryDetailData(item.miniWallkey, 'pop').then(res => {
          c.pop = res
        })
        getCategoryDetailData(item.miniWallkey, 'new').then(res => {
          c.new = res
        })
        getCategoryDetailData(item.miniWallkey, 'sell').then(res => {
          c.sell = res
        })
        this.categoryContent.push(c)
      })
    });
  }
};
</script>

<style>
.category-main {
  display: flex;
}

.cc-wrapper {
  height: calc(100vh - 93px);
  overflow: hidden;
}

.content-wrapper {
  flex-grow: 1;
  background-color: #ffffff;
}

.content-spread {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>