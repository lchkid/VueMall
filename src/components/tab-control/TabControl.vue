<template>
  <div class="tab-control">
    <div
      class="tc-item"
      :class="{active: currentIndex == index}"
      v-for="(item, index) in titles"
      :key="item"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}

.tc-item {
  flex: 1;
}

.tc-item span {
  padding: 5px;
}

.tab-control .active {
  color: var(--color-high-text);
}

.tab-control .active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>