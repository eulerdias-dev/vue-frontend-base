import { ModelDeDialogoDinamico } from './ModelDeDialogoDinamico'

export class OpcoesDeDialogoDinamico {
  public componente!: string;
  public titulo!: string;
  public tituloEstiloFonte: string = 'headline';
  public textoConfirmar!: string;
  public textoRejeitar!: string;
  public modelDoComponente!: ModelDeDialogoDinamico;
  public exibir: boolean = true;
}
