import Vue from 'vue'
import DialogoInstance from '@/plugins/dialogo/DialogoInstance'

declare module 'vue/types/vue' {
  interface Vue {
    $dialogo: DialogoInstance
  }
}
