<template>
  <div class="home-nav-bar">
    <nav-bar>
      <template #nb-center>三月半购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
.home-nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; */
}
</style>