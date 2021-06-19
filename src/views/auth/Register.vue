<template>
  <div class="register content">
    <div class="header">
      <h1>Register</h1>
    </div>
    <div class="container">
      <RegisterForm @register="registerSuccesful"/>
      <p>Already have an account? <router-link :to="{ name: 'Login' }"><span>Login</span></router-link> here</p>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../../components/RegisterForm.vue'

import { useRouter } from 'vue-router'

export default {
  name: "Register",
  components: {
    RegisterForm
  },
  setup() {
    const router = useRouter()

    const registerSuccesful = () => {
      router.push({ name: 'Faculties' })
    }

    return { registerSuccesful }
  }
}
</script>

<style>

</style>