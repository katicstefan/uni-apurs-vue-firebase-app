<template>
  <div class="home">
    <h1>Welcome</h1>

    <div class="container">
      <h3>Manage university data through this web app made with Vue and Firebase.</h3>
      <h2>Features</h2>
      <ul>
        <li><h3>User registration and login system</h3></li>
        <li><h3>User profiles</h3></li>
        <li><h3>CRUD operations over a Firestore DB</h3></li>
        <li><h3>Authorization of operations</h3></li>
        <li><h3>Form validation and dialogs</h3></li>
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

  .container {
    background-color: #fafafa;
    margin-right: 40px;
    padding: 40px;
    border: 1px solid #9b9b9b;
    border-radius: 10px;
  }

  h1 {
    padding: 0;
    padding-bottom: 20px;
    margin: 0;
    margin-top: 120px;
    font-size: 48px;
    font-weight: bold;
  }

  h2 {
    padding: 0;
    padding-top: 40px;
    margin: 0;
    font-size: 36px;
    font-weight: bold;
  }

  h3 {
    padding: 0px;
    margin: 0;
    font-size: 24px;
    font-weight: 400;
  }

  ul {
    list-style-type: none;
    h3 {
      margin: 8px 0 0 0;
    }
  }
</style>