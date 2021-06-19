<template>
  <Sidenav />
  <div class="app">
    <router-view />
  </div>
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

  top: 0;
  left: 0;
  position: absolute;

  display: flex;
  width: 100%;
  min-height: 100%;

  .app {
    max-width: 100%;
    margin-left: 440px;
  }
}
</style>
