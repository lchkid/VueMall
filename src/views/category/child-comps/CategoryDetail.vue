<template>
  <div class="category-content-detail">
    <tab-control :titles="titles" @tabClick="tabClick(index)"></tab-control>
    <good-list :goods="categoryDetail"></good-list>
  </div>
</template>

<script>
import TabControl from '@/components/tab-control/TabControl'
import GoodList from '@/components/good-list/GoodList'

export default {
  data() {
    return {
      titles: ['综合', '新品', '销量'],
      currentType: 'pop'
    }
  },
  props: {
    categoryDetail: {
      type: Array
    }
  },
  components: {
    TabControl,
    GoodList
  },
  methods: {
    // tabClick(index) {
    //   this.currentType = 
    // }
  }
}
</script>

<style>

</style>