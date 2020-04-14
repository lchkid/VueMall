<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/swiper'

export default {
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}

.detail-swiper img {
  transform: translate(0, -25%);
}
</style>