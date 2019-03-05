<template>
  <div class="about">
    <h1>This is an {{ counter }} page</h1>
    <button class="btn btn-large btn-primary" @click="updateCounter()">submit</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  background: wheat;
}

button {
  background-color: fuchsia;
  color: white;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  public page: string = 'MOHD';
  public counter: number = 0;
  public mounted() {
    this.page = 'Mod3';
  }

  public updateCounter() {
    this.counter++;
  }
}
</script>