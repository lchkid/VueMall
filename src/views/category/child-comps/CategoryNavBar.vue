<template>
  <div class="category-nav-bar">
    <nav-bar>
      <template #nb-center>
        商品分类
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
.category-nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>