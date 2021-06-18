<template>
  <div class="content">
    <div class="header">
      <h1>Create new - Department</h1>
    </div>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input v-model="name" type="text" required>
        <label>Faculty</label>
        <select v-model="selectedFaculty" required>
          <option v-for="faculty in faculties" :key="faculty.id" :value="faculty">
            {{ faculty.name }}
          </option>
        </select>
        <label>Courses</label>
        <select v-model="selectedSyllabuses" multiple>
          <option v-for="syllabus in syllabuses" :key="syllabus.id" :value="syllabus">
            {{ syllabus.name }}
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

import getFaculties from '../composables/faculties/getFaculties'
import getSyllabuses from '../composables/syllabuses/getSyllabuses'

export default {
  name: "DepartmentCreate",
  components: {},
  setup() {
    const router = useRouter()

    const { user } = getUser()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })

    const { faculties, error: errorFaculties, load: loadFaculties } = getFaculties()
    const { syllabuses, error: errorSyllabuses, load: loadSyllabuses } = getSyllabuses()

    loadFaculties()
    loadSyllabuses()

    const name = ref('')
    const selectedFaculty = ref({})
    const selectedSyllabuses = ref([])

    const handleSubmit = async () => {
      const department = {
        name: name.value,
        faculty: selectedFaculty.value,
        syllabuses: selectedSyllabuses.value,
        createdAt: timestamp()
      }
      const res = await projectFirestore.collection('departments').add(department)

      router.push({ name: 'Departments' })

    }
  
    return { faculties, errorFaculties, syllabuses, errorSyllabuses, name, selectedFaculty, selectedSyllabuses, handleSubmit }
  }
}
</script>

<style>

</style>