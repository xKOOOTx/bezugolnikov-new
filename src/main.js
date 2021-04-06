import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CoolLightBox from 'vue-cool-lightbox'
import VueTilt from 'vue-tilt.js'
import VueSplide from '@splidejs/vue-splide'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

Vue.config.productionTip = false
Vue.use(CoolLightBox)
Vue.use(VueTilt)
Vue.use(VueSplide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
