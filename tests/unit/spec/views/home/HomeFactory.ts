import { FactoryComponentBase } from '../../../../unit/base/factories/FactoryComponentBase'
import Home from '@/views/Home.vue'
import { shallowMount } from '@vue/test-utils'
import { DialogoPlugin } from '@/plugins/dialogo'

export class HomeFactory extends FactoryComponentBase<Home> {
  public async dadoClickNoBotaoDialogo (): Promise<void> {
    this.componente.find('#btn-dialogo').trigger('click')
    this.aguardarRenderizacao()
  }

  public criarWrapper (): void {
    localVue.use(DialogoPlugin)
    this.componente = shallowMount(Home, {
      localVue
    })
  }
}
