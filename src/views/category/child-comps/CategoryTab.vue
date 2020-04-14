<template>
  <div class="category-tab">
    <better-scroll class="cb-wrapper">
      <div class="cb-item" v-for="(item, index) in categoryTab" :key="item.acm" :list-item="item" :class="{active: currentIndex == index}" @click="tabClick(index)">
        <div>{{item.title}}</div>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "@/components/better-scroll/BetterScroll";

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    categoryTab: {
      type: Array,
      default: () => []
    }
  },
  components: {
    BetterScroll
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('changeTab', index)
    }
  }
};
</script>

<style>
.category-tab {
  width: 100px;
  flex-shrink: 0;
  background-color: #F6F6F6;
}

.cb-wrapper {
  height: calc(100vh - 93px);
  overflow: hidden;
}

.cb-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.cb-item.active {
  color: var(--color-high-text);
  font-weight: bold;
  background-color: #ffffff;
  border-left: 3px solid var(--color-high-text);
}
</style>