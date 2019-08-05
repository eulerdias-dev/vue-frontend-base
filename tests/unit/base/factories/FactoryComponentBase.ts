import { Wrapper, createWrapper, createLocalVue } from '@vue/test-utils'
import Vue, { VueConstructor } from 'vue'
import { Container } from 'typescript-ioc'
import { HttpService } from '@/config/httpService/HttpService'
import { DialogoPlugin } from '@/plugins/dialogo'

export abstract class FactoryComponentBase<T extends Vue | null> {
  public componente!: Wrapper<T>
  public espiao!: any

  public get vueInstance (): any {
    return this.componente.vm
  }

  public get vueComPluginDeDialogo (): VueConstructor {
    const vueComPluginDeDialogo = createLocalVue()
    vueComPluginDeDialogo.use(DialogoPlugin)
    return vueComPluginDeDialogo
  }

  public get dialogo (): Wrapper<any> {
    try {
      return createWrapper(this.vueInstance.$dialogo.instance)
    } catch (error) {
      throw new Error('Nenhum diálogo foi encontrado')
    }
  }

  public oDialogoEstaAberto (): boolean {
    try {
      return this.dialogo.find('#dialogo-conteudo').exists()
    } catch (error) {
      return false
    }
  }

  public prepararContainerDeInjecaoDaApi (): void {
    Container.snapshot(HttpService)
  }

  public restaurarContainerDeInjecaoDaApi (): void {
    Container.restore(HttpService)

    if (this.espiao) {
      this.espiao.mockRestore()
    }
  }

  public destruirDialogo (): void {
    if (this.vueInstance.$dialogo && this.vueInstance.$dialogo.instance) {
      this.vueInstance.$dialogo.instance.$destroy()
    }
  }

  public async montarComponente (): Promise<void> {
    this.criarWrapper()
    await this.aguardarRenderizacao()
  }

  public aguardarRenderizacao (): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        jest.runAllTimers()
        resolve()
      })
    })
  }

  public abstract criarWrapper(): void
}
