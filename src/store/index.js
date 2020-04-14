import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCount(state, payload) {
      payload.count++
    },
    addCart(state, payload) {
      payload.checked = false;
      state.cartList.push(payload);
    },
    changeChecked(state, payload) {
      payload.checked = !payload.checked
    },
    selectAll(state) {
      if (!state.cartList.length) {
        return false
      } else if (state.cartList.find(item => !item.checked)) { // 若找到一个未勾选的,就把所有的商品都选中
        state.cartList.forEach(item => item.checked = true)
      } else {
        state.cartList.forEach(item => item.checked = false) // 否则把所有的商品都取消选中
      }
    }
  },
  actions: {
    addProduct(context, payload) {
      return new Promise((resolve, reject) => {
        let oProduct = null;
        for (let item of context.state.cartList) {
          if (item.iid == payload.iid) {
            oProduct = item
          }
        }
        if (oProduct) {
          context.commit('addCount', oProduct)
          resolve('商品数量+1')
        } else {
          payload.count = 1
          context.commit('addCart', payload)
          resolve('商品加入购物车')
        }
      })
    }
  },
  modules: {
  }
})
