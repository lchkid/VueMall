<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-item-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="item in detailInfo.detailImage" :key="item.anchor">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="(imgUrl, index) in item.list" :key="index" v-lazy="imgUrl" @load="imgLoad" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
};
</script>

<style>
.detail-item-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.detail-item-info .info-desc {
  padding: 0 15px;
}

.detail-item-info .info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.detail-item-info .info-desc .start {
  float: left;
}

.detail-item-info .info-desc .end {
  float: right;
}

.detail-item-info .info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.detail-item-info .info-desc .end::after {
  right: 0;
}

.detail-item-info .info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.detail-item-info .info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.detail-item-info .info-list img {
  width: 100%;
  padding: 2px 5px;
}
</style>
