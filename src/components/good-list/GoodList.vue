<template>
  <div class="good-list">
    <div class="gl-item" v-for="(item, index) in goods" :key="index" @click="itemClick(item.iid)">
      <img v-lazy="imgUrl(item)" @load="imageLoad" alt />
      <div class="gl-info">
        <div class="title">
          <span>{{item.title}}</span>
        </div>
        <div class="price">
          <span>¥{{item.price}}</span>
        </div>
        <div class="mark">
          <span>{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    },
    imgUrl(item) {
      return item.image || item.img || item.show.img
    },
    itemClick(id) {
      this.$router.push({
        name: 'Detail',
        params: {
          iid: id
        }
      }).catch(err => err)
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     iid: id
      //   }
      // })
    }
  },
  computed: {
   
  }
};
</script>

<style>
.good-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.gl-item {
  width: 48%;
  position: relative;
  padding-bottom: 35px;
  margin-bottom: 3px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gl-item img {
  width: 100%;
}

.gl-info {
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3px 0;
}

.gl-info .title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin-bottom: 3px;
}

.gl-info .price,
.mark {
  display: inline-block;
}

.gl-info .price {
  position: relative;
  color: var(--color-high-text);
  margin-right: 20px;
}

.gl-info .price::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: -2px;
  right: -17px;
  background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>