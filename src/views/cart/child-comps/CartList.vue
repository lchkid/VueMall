<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartItems" :key="item.iid" :cart-item="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  components: {
    CartListItem
  },
  computed: {
    cartItems() {
      return this.$store.state.cartList
    }
  }
}
</script>

<style>

</style>