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
        <label>Syllabuses</label>
        <select v-model="selectedSyllabuses" multiple>
          <option v-for="syllabus in syllabuses" :key="syllabus.id" :value="syllabus">
            {{ syllabus.name }}
          </option>
        </select>
        <button v-if="!isPending">Submit</button>
        <button v-else>Saving...</button>
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

import getCollection from '@/composables/getCollection'
import useCollection from '@/composables/useCollection'

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

    const { addDoc: addDepartmentDoc, error: errorDepartment, isPending } = useCollection('departments')

    const { documents: faculties, error: errorFaculties } = getCollection('faculties')
    const { documents: syllabuses, error: errorSyllabuses } = getCollection('syllabuses')

    const name = ref('')
    const selectedFaculty = ref({})
    const selectedSyllabuses = ref([])

    const handleSubmit = async () => {
      let formattedSyllabuses = []

      selectedSyllabuses.value.forEach(element => {
        formattedSyllabuses.push({ id: element.id, name: element.name, createdAt: element.createdAt })
      })

      const department = {
        name: name.value,
        faculty: selectedFaculty.value,
        syllabuses: formattedSyllabuses,
        createdAt: timestamp(),
        createdByUserId: user.value.uid,
        createdBy: user.value.displayName
      }
      isPending.value = true
      const res = await addDepartmentDoc(department)
      isPending.value = false

      if(!errorDepartment.value) {
        // TODO: update syllabuses with department.id
        router.push({ name: 'Departments' })
      }

    }
  
    return { faculties, errorFaculties, syllabuses, errorSyllabuses, name, selectedFaculty, selectedSyllabuses, handleSubmit, isPending }
  }
}
</script>

<style>

</style>