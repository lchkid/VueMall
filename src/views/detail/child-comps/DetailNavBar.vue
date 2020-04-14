<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template #nb-left>
        <div @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template #nb-center>
        <div class="nb-title" v-for="(item, index) in titles" :key="item" @click="titleClick(index)" :class="{active: currentIndex == index}">
          {{item}}
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/NavBar'

export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style>
.detail-nav-bar .nb-center {
  display: flex;
  font-size: 14px;
}
.detail-nav-bar .nb-title {
  flex-grow: 1;
}

.detail-nav-bar .nb-title.active {
  color: var(--color-high-text)
}
</style>