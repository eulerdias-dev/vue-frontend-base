import Vuex, { Store } from 'vuex'
import { Container } from 'typescript-ioc'
import { HttpService } from '@/config/httpService/HttpService'

export abstract class FactoryStoreBase {
  public store!: Store<any>
  public espiao!: any

  public injetarAPI (): void {
    Container.snapshot(HttpService)
    this.stubarApi()
  }

  public dadoUmaStoreVazia () {
    const configuracao = this.configurarStore()
    this.store = new Vuex.Store(configuracao)
  }

  public restaurarEstadoInicial (): void {
    Container.restore(HttpService)

    if (this.espiao) {
      this.espiao.mockRestore()
    }
  }

  public prepararAPI (): void {
    Container.snapshot(HttpService)
  }

  protected abstract stubarApi(): void

  protected abstract configurarStore(): any
}
