<template>
  <div class="login content">
    <div class="header">
      <h1>Login</h1>
    </div>
    <div class="container">
      <LoginForm @login="loginSuccesful"/>
      <p>Don't have an account? <router-link :to="{ name: 'Register' }"><span>Register</span></router-link> here</p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../components/LoginForm.vue'

import { useRouter } from 'vue-router'

export default {
  name: "Login",
  components: {
    LoginForm
  },
  setup() {
    const router = useRouter()

    const loginSuccesful = () => {
      router.push({ name: 'Faculties' })
    }

    return { loginSuccesful }
  }
}
</script>

<style>

</style>