import {
  FactoryComponentBase
} from '../../../../unit/base/factories/FactoryComponentBase'
import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

export class AboutFactory extends FactoryComponentBase<About> {
  public async obterTituloDaPagina (): Promise<string> {
    return Promise.resolve(this.componente.find('h1').text())
  }
  public criarWrapper (): void {
    this.componente = shallowMount(About)
  }
}
