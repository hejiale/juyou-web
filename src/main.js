import Vue from 'vue'
import App from './App.vue'
import './global'
import './api/config'
import element from '../src/plugins/elementUI/index';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(element);

new Vue({
  render: h => h(App),
}).$mount('#app')
