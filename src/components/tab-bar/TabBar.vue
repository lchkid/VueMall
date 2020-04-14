<template>
  <div id="tab-bar">
    <tab-bar-item link="/home">
      <template #tb-icon>
        <img src="@/assets/img/tab-bar/home.svg" alt />
      </template>
      <template #tb-icon-active>
        <img src="@/assets/img/tab-bar/home_active.svg" alt />
      </template>
      <template #tb-text>
        <span>首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <template #tb-icon>
        <img src="@/assets/img/tab-bar/category.svg" alt />
      </template>
      <template #tb-icon-active>
        <img src="@/assets/img/tab-bar/category_active.svg" alt />
      </template>
      <template #tb-text>
        <span>分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <template #tb-icon>
        <img src="@/assets/img/tab-bar/cart.svg" alt />
      </template>
      <template #tb-icon-active>
        <img src="@/assets/img/tab-bar/cart_active.svg" alt />
      </template>
      <template #tb-text>
        <span>购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <template #tb-icon>
        <img src="@/assets/img/tab-bar/profile.svg" alt />
      </template>
      <template #tb-icon-active>
        <img src="@/assets/img/tab-bar/profile_active.svg" alt />
      </template>
      <template #tb-text>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  components: {
    TabBarItem
  }
};
</script>

<style>
#tab-bar {
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}
</style>