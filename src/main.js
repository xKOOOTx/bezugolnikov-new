import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CoolLightBox from 'vue-cool-lightbox'
import VueTilt from 'vue-tilt.js'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.config.productionTip = false
Vue.use(CoolLightBox)
Vue.use(VueTilt)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
