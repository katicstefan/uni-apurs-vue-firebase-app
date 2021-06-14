<template>
  <div class="sidenav">
    <router-link to="/">University Management App</router-link>
    <br />
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <br />
    <router-link to="/faculties">Faculties</router-link>
    <router-link to="/departments">Departments</router-link>
    <router-link to="/syllabuses">Syllabuses</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/classrooms">Classrooms</router-link>
    <router-link to="/terms">Terms (TakesPlaceIns)</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/professors">Professors</router-link>
  </div>
</template>

<script>
export default {
    name: "Sidenav"
}
</script>

<style lang="scss">
.sidenav {
    width: 380px;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fafafa;
    overflow-x: hidden;
    padding: 28px 0 0 40px;
    border-right: 20px solid #69eba1;
    text-align: left;

    a {
        font-weight: normal;
        color: #707070;
        padding: 16px 0 0 0;
        text-decoration: none;
        font-size: 24px;
        display: block;

        &.router-link-exact-active {
            font-weight: bold;
        }
    }
}
</style>