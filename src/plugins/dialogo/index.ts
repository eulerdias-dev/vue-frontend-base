import _Vue from 'vue'
import Router from 'vue-router'
import DialogoInstance from './DialogoInstance'

export const DialogoPlugin = (Vue: typeof _Vue, options?: Router) => {
  Vue.prototype.$dialogo = new DialogoInstance(options)
}
