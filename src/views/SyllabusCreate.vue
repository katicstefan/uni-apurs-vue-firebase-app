<template>
  <div class="content">
    <div class="header">
      <h1>Create new - Syllabus</h1>
    </div>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input v-model="name" type="text" required>
        <select v-model="selectedDepartments" multiple>
          <option v-for="department in departments" :key="department.id" :value="department">
            {{ department.name }}
          </option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

import getUser from '../composables/getUser'
import { watch } from '@vue/runtime-core'

import getDepartments from '../composables/departments/getDepartments'

export default {
  name: "SyllabusCreate",
  components: {},
  setup() {
    const router = useRouter()

    const { user } = getUser()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })

    const { departments, error, load } = getDepartments()

    load()

    const name = ref('')
    const selectedDepartments = ref([])

    const handleSubmit = async () => {
      const syllabus = {
        name: name.value,
        departments: selectedDepartments.value,
        createdAt: timestamp()
      }
      const res = await projectFirestore.collection('syllabuses').add(syllabus)

      router.push({ name: 'Syllabuses' })
    }

    return { departments, error, name, selectedDepartments, handleSubmit }
  }
}
</script>

<style>

</style>