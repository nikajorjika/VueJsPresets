import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'
import i18n from './i18n/i18n'
import utils from './utils/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  utils,
  render: h => h(App)
}).$mount('#app')
