import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from './components/toast'

Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.gif')
})

// FastClick.attach(document.body);

// Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')