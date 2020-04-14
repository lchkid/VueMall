<template>
  <div class="s-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.s-item{
  width: 100%;
  flex-shrink: 0;
}

.s-item img {
  width: 100%;
  vertical-align: middle;
}
</style>