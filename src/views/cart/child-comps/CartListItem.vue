<template>
  <div class="cl-item" @click="btnClick">
    <div class="check">
      <check-button :is-check="cartItem.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="cartItem.img" alt />
    </div>
    <div class="item-info">
      <div class="title">{{cartItem.title}}</div>
      <div class="desc">{{cartItem.desc}}</div>
      <div class="bottom">
        <div class="price">¥{{cartItem.price}}</div>
        <div class="count">x{{cartItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/check-button/CheckButton'

export default {
  props: {
    cartItem: {
      type: Object
    }
  },
  components: {
    CheckButton
  },
  methods: {
    btnClick() {
      this.$store.commit('changeChecked', this.cartItem)
    }
  }
};
</script>

<style scoped>
.cl-item {
  display: flex;
  padding: 6px;
  border-bottom: 1px solid #33333330;
}

.cl-item .check {
  display: flex;
  align-items: center;
}

.cl-item .item-img img {
  margin: 5px;
  width: 80px;
  display: block;
  border-radius: 5px;
}

.cl-item .item-info {
  margin: 10px 10px;
  position: relative;
}

.cl-item .item-info > div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.cl-item .item-info .title {
  font-size: 16px;
  font-weight: bold;
}

.cl-item .item-info .desc {
  margin-top: 15px;
  font-size: 14px;
}

.cl-item .item-info .bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.cl-item .item-info .bottom .price {
  color: var(--color-high-text);
}
</style>