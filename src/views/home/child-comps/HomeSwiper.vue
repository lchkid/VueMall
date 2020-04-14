<template>
  <div class="home-swiper">
    <swiper v-if="banners.length">
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem } from "@/components/swiper/";

export default {
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.$emit('imgLoad')
        this.isLoad = true
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
</style>