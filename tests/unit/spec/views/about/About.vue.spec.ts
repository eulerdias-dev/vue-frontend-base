import { AboutFactory } from './AboutFactory'

describe('Página About', () => {
  const factory = new AboutFactory()

  it('Dado que o titulo seja "This is an about page"', async (done) => {
    await factory.montarComponente()

    const titulo = await factory.obterTituloDaPagina()
    const tituloEsperado = 'This is an about page'

    expect(titulo).toEqual(tituloEsperado)
    done()
  })

  it('Snapshot', async (done) => {
    await factory.montarComponente()

    expect(factory.componente.html())
      .toMatchSnapshot()
    done()
  })
})
