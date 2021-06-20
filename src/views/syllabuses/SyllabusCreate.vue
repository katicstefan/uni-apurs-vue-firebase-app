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
import { projectFirestore, timestamp } from '../../firebase/config'

import getUser from '../../composables/getUser'
import { watch } from '@vue/runtime-core'

import getCollection from '@/composables/getCollection'
import useCollection from '@/composables/useCollection'
import useDocument from '../../composables/useDocument'
import getDocument from '../../composables/getDocument'

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

    const { addDoc: addSyllabusDoc, error: errorSyllabus, isPending } = useCollection('syllabuses')

    const { documents: departments, error: errorDepartments } = getCollection('departments')

    const name = ref('')
    const selectedDepartments = ref([])

    const handleSubmit = async () => {
      let formattedDepartments = []

      selectedDepartments.value.forEach(element => {
        formattedDepartments.push({ id: element.id, name: element.name, createdAt: element.createdAt })
      })

      const syllabus = {
        name: name.value,
        departments: formattedDepartments,
        createdAt: timestamp(),
        createdByUserId: user.value.uid,
        createdBy: user.value.displayName
      }
      isPending.value = true
      const res = await addSyllabusDoc(syllabus)
      isPending.value = false        
      
      const { document: getCreatedSyllabus } = getDocument('syllabuses', res.id)
      if (!errorSyllabus.value) {
        // TODO: update departments with syllabus.id

        selectedDepartments.value.forEach(async (dep) => {
          const { updateDoc: updateDepartment } = useDocument('departments', dep.id)

          let newSyllabuses = [...dep.syllabuses]
          let newSyllabus = {...syllabus, id: res.id}
          delete newSyllabus.departments
          delete newSyllabus.createdAt
          
          newSyllabuses.push(newSyllabus)
          await updateDepartment({ "syllabuses": newSyllabuses })
        })
        router.push({ name: 'Syllabuses' })
      }
    }

    return { departments, errorDepartments, name, selectedDepartments, handleSubmit, isPending }
  }
}
</script>

<style>

</style>