<template>
  <div class="detail-tab-bar">
    <div class="dtb-item dtb-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon sub"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="dtb-item dtb-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="goCart">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
    goCart() {
      this.$router.push("/cart")
    }
  }
};
</script>

<style>
.detail-tab-bar {
  height: 49px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}

.detail-tab-bar .dtb-item {
  flex: 1;
  display: flex;
}

.detail-tab-bar .dtb-item > div {
  flex: 1;
}

.detail-tab-bar .dtb-left .text {
  font-size: 13px;
}

.detail-tab-bar .dtb-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
}

.detail-tab-bar .dtb-left .service {
  background-position: 0 -52px;
}

.detail-tab-bar .dtb-left .shop {
  background-position: 0 -98px;
}

.detail-tab-bar .dtb-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}

.detail-tab-bar .dtb-right .cart {
  background-color: #ffe817;
  color: #333;
}

.detail-tab-bar .dtb-right .buy {
  background-color: #f69;
}
</style>
