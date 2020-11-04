import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import '@/assets/css/global.css'
import flashNotif from 'flash-notif'
import '../node_modules/flash-notif/dist/flash-notif.css'

Vue.use(flashNotif, { store })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
