<template>
  <div class="cart-bar">
    <check-button class="cb-select" @click.native="selectAll" :is-check="isSelect"></check-button>
    <div class="cb-info">
      <span class="cb-all">全选</span>
      <span class="cb-total">合计: ¥{{totalPrice}}</span>
    </div>
    <span class="cb-checkout" @click="checkoutClick">结算({{select}})</span>
  </div>
</template>

<script>
import CheckButton from '@/components/check-button/CheckButton'

	export default {
    components: {
		  CheckButton
    },
    methods: {
      selectAll() {
        this.$store.commit('selectAll')
      },
      checkoutClick() {
        if(!this.$store.state.cartList.length){
          this.$toast.show('请添加商品')
        }else if(!this.select) {
          this.$toast.show('请选择商品')
        }else {
          this.$toast.show('该功能还未完成')
        }
      }
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => item.checked).reduce((prev, item) => prev += item.price * item.count, 0).toFixed(2)
      },
      select() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelect() {
        // 若找到一个未勾选的,就返回false,即不激活active class
        return this.$store.state.cartList.length ? !this.$store.state.cartList.find(item => !item.checked) : false
      }
    }
	}
</script>

<style>
  .cart-bar {
    height: 44px;
    line-height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    color: #888;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, .2);
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .cart-bar .cb-info {
    flex: 1;
  }
  .cart-bar .cb-select {
    margin-left: 15px;
  }

    .cart-bar  .cb-all {
      padding-left: 5px;
    }

  .cart-bar .cb-total {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .cart-bar .cb-checkout {
    background-color: var(--color-tint);
    color: #fff;
    width: 100px;
    text-align: center;
  }
</style>
