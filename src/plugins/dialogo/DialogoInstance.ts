import _Vue from 'vue'
import Router from 'vue-router'
import Dialogo from '@/components/dialogo/Dialogo.vue'
import DialogoDinamico from '@/components/dialogo/DialogoDinamico.vue'
import { OpcoesDeDialogo } from '@/model/dialogo/OpcoesDeDialogo'
import { OpcoesDeDialogoDinamico } from '@/model/dialogo/OpcoesDeDialogoDinamico'

export default class DialogoInstance {
  public instance!: _Vue;
  public router?: Router;

  constructor (router?: Router) {
    this.router = router
  }

  public abrir (opcoes: OpcoesDeDialogo): Promise<any> {
    this.instance = this.instanciarDialogo(opcoes)
    return this.montarComponente()
  }

  public abrirDialogoDinamico (opcoes: OpcoesDeDialogoDinamico): Promise<any> {
    this.instance = this.instanciarDialogoDinamico(opcoes)
    return this.montarComponente()
  }

  private instanciarDialogo (opcoes: OpcoesDeDialogo): _Vue {
    const DialogExtended = _Vue.extend(Dialogo)
    return new DialogExtended({ propsData: { opcoes } })
  }

  private instanciarDialogoDinamico (opcoes: OpcoesDeDialogoDinamico): _Vue {
    const DialogExtended = _Vue.extend(DialogoDinamico)
    return new DialogExtended({ propsData: { opcoes } })
  }

  private montarComponente (): Promise<any> {
    this.instance.$mount()

    return new Promise((resolve, reject) => {
      this.instance.$on('confirmar', () => this.tratarPromise(resolve))
      this.instance.$on('rejeitar', () => this.tratarPromise(reject))
    })
  }

  private tratarPromise (callBack: any) {
    this.instance.$destroy()
    callBack()
  }
}
