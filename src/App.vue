<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<style lang="scss" scoped>
  template {
    background: wheat;
  }
</style>


<script>
export default {
  name: 'App',
  data () {
    return {
      page: 'App2'
    }
  }
}
</script>
