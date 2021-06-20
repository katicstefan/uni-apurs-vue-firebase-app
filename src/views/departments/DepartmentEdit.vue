<template>
  <div class="content">
    <div class="header">
      <h1>Edit existing - Department</h1>
    </div>
    <div class="container" >
      <form @submit.prevent="handleSubmit" v-if="department">
        <label>Name</label>
        <input v-model="name" type="text" required>
        <label>Faculty</label>
        <select v-model="selectedFaculty" required>
          <option v-for="faculty in faculties" :key="faculty.id" :value="faculty">
            {{ faculty.name }}
          </option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onBeforeUpdate, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../../composables/getUser'

import getCollection from '../../composables/getCollection'
import getDocument from '../../composables/getDocument'
import useDocument from '../../composables/useDocument'
import { projectFirestore } from '../../firebase/config'

export default {
  name: 'DepartmentEdit',
  props: ['id'],
  setup(props) {
    const router = useRouter()
    
    const { user } = getUser()
    
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })

    const { updateDoc } = useDocument('departments', props.id)
    const { document: department } = getDocument('departments', props.id)
    const { documents: faculties, error: errorFaculties } = getCollection('faculties')

    const name = ref('')
    const selectedFaculty = ref({})

    let formFilled = false

    onBeforeUpdate(() => {
      if (!formFilled) {
        name.value = department.value.name
        selectedFaculty.value = { ...department.value.faculty }
        formFilled = true
      }
    })

    const handleSubmit = async () => {
      const updates = {
        name: name.value,
        faculty: selectedFaculty.value
      }
      const res = await updateDoc(updates)

      const syllabuses = await projectFirestore.collection('syllabuses').get()

      syllabuses.docs.map(async(doc) => {
        let syllabusDoc = {...doc.data()}
        let newDepartments = syllabusDoc.departments
        let newDepartment = department.value
        newDepartment.name = name.value
        newDepartment.faculty = selectedFaculty.value
        delete newDepartment.syllabuses
        delete newDepartment.faculty

        const { updateDoc: updateSyllabus } = useDocument('syllabuses', doc.id)

        newDepartments.forEach((item, index, object) => {
          if (item.id === props.id) {
            console.log('match')
            object.splice(index, 1)
            object.push({ ...newDepartment })
          }
        })

        console.log(newDepartments)
        await updateSyllabus({ "departments": newDepartments })
      })

      router.push({ name: 'Departments' })
    }

    return { department, name, selectedFaculty, faculties, handleSubmit }
  }
}
</script>

<style>

</style>