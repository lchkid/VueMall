<template>
  <div class="detail-recommend">
    <div class="info-header">热门推荐</div>
    <good-list :goods="recommend"></good-list>
  </div>
</template>

<script>
import GoodList from "@/components/good-list/GoodList";

export default {
  components: {
    GoodList
  },
  props: {
    recommend: {
      type: Array
    }
  }
};
</script>

<style>
.detail-recommend {
  padding: 5px 2px;
}

.detail-recommend .info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
