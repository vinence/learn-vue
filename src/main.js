import Vue from 'vue'
import App from './App.vue'
import eventBus from "@/eventBus/index";

Vue.config.productionTip = false
Vue.prototype.$bus = eventBus

new Vue({
  render: h => h(App),
}).$mount('#app')
