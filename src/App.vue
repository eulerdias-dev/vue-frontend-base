<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private default_layout = "default";

  private get layout(): string {
    return (this.$route.meta.layout || this.default_layout) + "-layout";
  }
}
</script>
