<template>
  <v-container grid-list-xs>
    <v-layout
      justify-center
      mt-4
    >
      <v-btn
        id="btn-dialogo"
        @click="aoSelecionarDialogo"
        color="success"
      >Dialogo</v-btn>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { OpcoesDeDialogo } from "../model/dialogo/OpcoesDeDialogo";

@Component
export default class Home extends Vue {
  private aoSelecionarDialogo(): void {
    const opcoes = new OpcoesDeDialogo("Dialogo", "Teste de dialogo", "Ok", "");

    this.$dialogo.abrir(opcoes);
  }
}
</script>
