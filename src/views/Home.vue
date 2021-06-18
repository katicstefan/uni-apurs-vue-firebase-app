<template>
  <div class="home content">
    <div class="header">
      <h1>Welcome</h1>
    </div>

    <div class="container">
      <h3>Manage university data through this web app made with Vue and Firebase.</h3>
      <h2>Features</h2>
      <ul>
        <li><h3>User registration and login system</h3></li>
        <li><h3>User profiles</h3></li>
        <li><h3>CRUD operations over a Firestore DB</h3></li>
        <li><h3>Route guarding for unauthenticated users</h3></li>
        <li><h3>Form validation</h3></li>
        <li><h3>Realtime data listeners</h3></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
}
</script>

<style lang="scss">
@import '../scss/Home.scss';
</style>