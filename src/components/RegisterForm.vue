<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button v-if="!isPending">Register</button>
    <button v-else disabled>Loading...</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useRegister from '../composables/useRegister'

export default {
  setup(props, context) {
    const { error, register, isPending } = useRegister()

    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await register(email.value, password.value, displayName.value)
      if (!error.value) {
        console.log('user registered')
        context.emit('register')
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>