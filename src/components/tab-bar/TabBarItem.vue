<template>
  <div class="tab-bar-item" @click="tbClick">
    <div class="tb-icon" v-show="!isActive">
      <slot name="tb-icon"></slot>
    </div>
    <div class="tb-icon-active" v-show="isActive">
      <slot name="tb-icon-active"></slot>
    </div>
    <div class="tb-text" :style="activeColor">
      <slot name="tb-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "/home"
    }
  },
  methods: {
    tbClick() {
      this.$router.replace(this.link).catch(err => err);
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.link
    },
    activeColor() {
      return this.isActive ? {'color': '#ff5777'} : null
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.tb-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>