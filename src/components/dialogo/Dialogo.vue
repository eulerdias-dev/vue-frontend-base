<template>
  <v-dialog
    id="dialogo"
    v-model="exibirDialogo"
    :persistent="opcoes.persistente"
    dark
    eager
    :max-width="500"
  >
    <v-card id="dialogo-conteudo">
      <v-card-title
        id="titulo"
        class="title"
        primary-title
      >
        {{ opcoes.titulo }}
      </v-card-title>

      <v-card-text
        id="texto"
        v-html="opcoes.texto"
      >
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          id="rejeitar"
          color="red"
          text
          v-if="opcoes.textoRejeitar"
          @click.native="aoRejeitar"
        >
          {{ opcoes.textoRejeitar }}
        </v-btn>

        <v-btn
          id="confirmar"
          color="primary"
          text
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
import { OpcoesDeDialogo } from "@/model/dialogo/OpcoesDeDialogo";

@Component
export default class Dialogo extends Vue {
  @Prop()
  private opcoes!: OpcoesDeDialogo;

  public get exibirDialogo(): boolean {
    return this.opcoes.exibir;
  }

  public aoConfirmar() {
    this.$emit("confirmar");
  }
  public aoRejeitar() {
    this.$emit("rejeitar");
  }
}
</script>
