<template>
  <div class="register content">
    <div class="header">
      <h1>Register</h1>
    </div>
    <div class="container">
      <RegisterForm />
      <p>Already have an account? <router-link :to="{ name: 'Login' }"><span>Login</span></router-link> here</p>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: "Register",
  components: {
    RegisterForm
  }
}
</script>

<style>

</style>