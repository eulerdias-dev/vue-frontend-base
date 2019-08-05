import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { DialogoPlugin } from './plugins/dialogo'
import Default from '@/layouts/Default.vue'
import SemMenu from '@/layouts/SemMenu.vue'
import './registerRouteConfig'
import '@babel/polyfill'

Vue.component('default-layout', Default)
Vue.component('sem-menu-layout', SemMenu)

Vue.config.productionTip = false
Vue.use(DialogoPlugin, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
