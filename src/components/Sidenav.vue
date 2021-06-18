<template>
  <div class="sidenav">
    <router-link to="/">University Management App</router-link>
    <br />
    <div v-if="!user">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <br />
    </div>
    <div v-else>
      <p>Hello {{ user.displayName }}</p>
      <p>Logged in as {{ user.email }}</p>
      <button @click="handleLogout">Logout</button>
      <br />
    </div>
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
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  name: "Sidenav",
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleLogout = async () => {
      await logout()
      if (!error.value) {
        console.log('user logged out')
      }
    }

    return { handleLogout, user }
  }
}
</script>

<style lang="scss">
@import '../scss/Sidenav.scss';
</style>