<template>
  <div class="content">
    <div class="header">
      <h1>Edit existing - Faculty</h1>
    </div>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input v-model="name" type="text" required>
        <label>Address</label>
        <input v-model="address" type="text" required>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import getFaculty from '@/composables/faculties/getFaculty'

export default {
  name: 'FacultyEdit',
  props: ['id'],
  setup(props) {
    const id = props.id

    const name = ref('')
    const address = ref('')

    const { faculty, error, load } = getFaculty(id)
    
    load()
    
    console.log(faculty)

    return { name, address }
  }
}
</script>

<style>

</style>