<template>
  <div class="home-recommend">
    <div class="r-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <div class="r-detail">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </div>
        </a>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.home-recommend {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .r-item {
    flex: 1;
    text-align: center;
  }

  .r-detail img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>