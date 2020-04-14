<template>
  <div class="check-button" :class="{checked: isCheck}">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.check-button {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  border: 1px solid #aaa;
}

.checked {
  background-color: var(--color-tint);
  border-color: var(--color-tint)
}
</style>