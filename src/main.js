import Vue from 'vue'
import App from './App.vue'
import './global'
import './api/config'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
