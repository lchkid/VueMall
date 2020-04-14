<template>
  <div id="cart">
    <cart-nav-bar></cart-nav-bar>
    <better-scroll class="cart-wrapper">
      <cart-list></cart-list>
    </better-scroll>
    <cart-bar></cart-bar>
  </div>
</template>

<script>
import BetterScroll from "@/components/better-scroll/BetterScroll";

import CartNavBar from "./child-comps/CartNavBar";
import CartList from "./child-comps/CartList";
import CartBar from "./child-comps/CartBar";

export default {
  components: {
    BetterScroll,
    CartNavBar,
    CartList,
    CartBar
  }
}
</script>

<style>
#cart .cart-wrapper {
  overflow: hidden;
  height: calc(100vh - 137px)
}
</style>