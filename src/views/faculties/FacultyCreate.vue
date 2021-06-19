<template>
  <div class="content">
    <div class="header">
      <h1>Create new - Faculty</h1>
    </div>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input v-model="name" type="text" required>
        <label>Address</label>
        <input v-model="address" type="text" required>
        <button v-if="!isPending">Submit</button>
        <button v-else disabled>Saving...</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { timestamp } from '../../firebase/config'

import getUser from '../../composables/getUser'
import { watch } from '@vue/runtime-core'

import useCollection from '@/composables/useCollection'

export default {
  setup() {
    const router = useRouter()

    const { user } = getUser()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })

    const { error, addDoc, isPending } = useCollection('faculties')

    const name = ref('')
    const address = ref('')

    const handleSubmit = async () => {
      const faculty = {
        name: name.value,
        address: address.value,
        createdAt: timestamp(),
        createdByUserId: user.value.uid,
        createdBy: user.value.displayName
      }

      isPending.value = true
      const res = await addDoc(faculty)
      isPending.value = false
      if (!error.value) {
        router.push({ name: 'Faculties' })
      }
    }
    
    return { name, address, handleSubmit, isPending }
  }
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;

  input {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    outline: none;
    color: #999;
  }

  label {
    display: inline-block;
    margin-top: 10px;
    position: relative;
    color: map-get($map: $colors, $key: primary-text);
    font-size: 14px;
  }

  button {
    margin: 20px auto 0;
  }
}


</style>