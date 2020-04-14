<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <template #nb-center>购物车({{total}})</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar/NavBar";

export default {
  components: {
    NavBar
  },
  computed: {
    total() {
      return this.$store.state.cartList.length
    }
  }
};
</script>

<style>
.cart-nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>