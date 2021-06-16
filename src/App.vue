<template>
  <Sidenav />
  <router-view />
</template>

<script>
import Sidenav from './components/Sidenav.vue'

export default {
  name: "App",
  components: {
    Sidenav
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: left;
  color: #707070;
  background-color: #f2f2f2;

  position: fixed;
  top: 0;
  left: 440px;
  
  min-width: 1480px;
  height: 100vh;
}
</style>
