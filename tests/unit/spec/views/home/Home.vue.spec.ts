import { HomeFactory } from './HomeFactory'

describe('Pagina Home', () => {
  const factory = new HomeFactory()

  beforeEach(async (done) => {
    await factory.montarComponente()
    done()
  })

  it('Dado click no botão dialogo, o dialogo deverá ser exibido', async (done) => {
    await factory.dadoClickNoBotaoDialogo()

    expect(factory.oDialogoEstaAberto()).toBeTruthy()
    done()
  })

  it('Snapshot', async (done) => {
    expect(factory.componente.html())
      .toMatchSnapshot()
    done()
  })
})
