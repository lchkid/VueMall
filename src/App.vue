<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tab-bar/TabBar";

export default {
  components: {
    TabBar
  }
};
</script>

<style>
@import "~@/assets/css/base.css";
</style>
