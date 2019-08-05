<template>
  <v-dialog
    v-model="opcoes.exibir"
    scrollable
    persistent
    dark
    eager
    :max-width="500"
  >
    <v-card
      id="dialogo-dinamico"
      ref="dialogo-dinamico"
    >
      <v-card-title
        :class="obterEstiloFonte"
        primary-title
      >
        {{ opcoes.titulo }}
      </v-card-title>

      <v-card-text style="max-height: 300px">
        <component
          :is="componenteDinamico"
          :model="opcoes.modelDoComponente"
        >
        </component>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          id="cancelar"
          color="red"
          flat
          v-if="opcoes.textoCancelar"
          @click.native="aoRejeitar"
        >
          {{ opcoes.textoCancelar }}
        </v-btn>

        <v-btn
          id="confirmar"
          color="primary"
          flat
          v-if="opcoes.textoConfirmar"
          @click.native="aoConfirmar"
        >
          {{ opcoes.textoConfirmar }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { OpcoesDeDialogoDinamico } from "@/model/dialogo/OpcoesDeDialogoDinamico";

@Component
export default class DialogoDinamico extends Vue {
  @Prop()
  public opcoes!: OpcoesDeDialogoDinamico;

  private get componenteDinamico(): any {
    return () => import(`@/components/${this.opcoes.componente}`);
  }

  private get obterEstiloFonte(): string {
    return this.opcoes.tituloEstiloFonte;
  }

  public aoConfirmar() {
    this.$emit("confirmar");
  }

  public aoRejeitar() {
    this.$emit("rejeitar");
  }
}
</script>
