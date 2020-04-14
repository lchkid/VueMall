import Toast from './Toast'

const toastObject = {}

toastObject.install = function(Vue) {
  // 新建构造器
  const toastConstructor = Vue.extend(Toast)

  // 注册组件
  const toast = new toastConstructor

  // 挂载到dom
  toast.$mount(document.createElement('div'))

  // 添加toast到body
  // console.log(toast.$el)
  document.body.appendChild(toast.$el)

  // 给Vue实例添加原型
  Vue.prototype.$toast = toast

}

export default toastObject