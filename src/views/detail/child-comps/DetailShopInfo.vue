<template>
  <div class="detail-shop-info">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" />
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.cSells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shopInfo.cGoods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style>
.detail-shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.detail-shop-info .shop-top {
  line-height: 45px;
  display: flex;
  align-items: center;
}

.detail-shop-info .shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-shop-info .shop-top .title {
  margin-left: 10px;
  vertical-align: center;
}

.detail-shop-info .shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.detail-shop-info .shop-middle-item {
  flex: 1;
}

.detail-shop-info .shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-shop-info .sells-count,
.goods-count {
  font-size: 18px;
}

.detail-shop-info .sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.detail-shop-info .shop-middle-right {
  font-size: 13px;
  color: #333;
}

.detail-shop-info .shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.detail-shop-info .shop-middle-right table td {
  padding: 5px 0;
}

.detail-shop-info .shop-middle-right .score {
  color: #5ea732;
}

.detail-shop-info .shop-middle-right .score-better {
  color: #f13e3a;
}

.detail-shop-info .shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.detail-shop-info .shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.detail-shop-info .shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.detail-shop-info .enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
