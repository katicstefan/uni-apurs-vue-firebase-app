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
@import '../scss/Sidenav.scss';
</style>