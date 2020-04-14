<template>
  <div class="nav-bar">
    <div class="nb-left">
      <slot name="nb-left"></slot>
    </div>
    <div class="nb-center">
      <slot name="nb-center"></slot>
    </div>
    <div class="nb-right">
      <slot name="nb-right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  position: relative;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.nb-left {
  width: 60px;
}

.nb-center {
  flex: 1;
}

.nb-right {
  width: 60px;
}
</style>