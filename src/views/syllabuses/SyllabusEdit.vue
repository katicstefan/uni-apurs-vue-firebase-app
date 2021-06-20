<template>
  <div class="content">
    <div class="header">
      <h1>Edit existing - Syllabus</h1>
    </div>
    <div class="container">
      <form @submit.prevent="handleSubmit" v-if="syllabus">
        <label>Name</label>
        <input v-model="name" type="text" required>
        <select v-model="selectedDepartments" required multiple>
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
import { onBeforeUpdate, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../../composables/getUser'

import getCollection from '../../composables/getCollection'
import getDocument from '../../composables/getDocument'
import useDocument from '../../composables/useDocument'
import { projectFirestore } from '../../firebase/config'

export default {
  name: 'SyllabusEdit',
  props: ['id'],
  setup(props) {
    const router = useRouter()
    
    const { user } = getUser()
    
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })

    const { updateDoc } = useDocument('syllabuses', props.id)
    const { document: syllabus } = getDocument('syllabuses', props.id)
    const { documents: departments, error: errorDepartments} = getCollection('departments')
  
    const name = ref('')
    const selectedDepartments = ref([])

    let formFilled = false

    onBeforeUpdate(() => {
      if (!formFilled) {
        name.value = syllabus.value.name
        syllabus.value.departments.forEach(department => {
          selectedDepartments.value.push({ ...department })  
        });
        formFilled = true
      }
    })

    const handleSubmit = async () => {
      const updates = {
        name: name.value,
        departments: selectedDepartments.value
      }
      const res = await updateDoc(updates)

      const departments = await projectFirestore.collection('departments').get()

      departments.docs.map(async(doc) => {
        let departmentDoc = {...doc.data()}
        let newSyllabuses = departmentDoc.syllabuses
        let newSyllabus = syllabus.value
        newSyllabus.name = name.value
        newSyllabus.departments = selectedDepartments.value
        delete newSyllabus.departments

        const { updateDoc: updateDepartment } = useDocument('departments', doc.id)

        newSyllabuses.forEach((item, index, object) => {
          if (item.id === props.id) {
            //console.log('match')
            object.splice(index, 1)
            object.push({ ...newSyllabus })
          }
        })

        //console.log(newSyllabuses)
        await updateDepartment({ "syllabuses": newSyllabuses })
      })

      router.push({ name: 'Syllabuses' })
    }

    return { syllabus, name, departments, selectedDepartments, handleSubmit }
  }
}
</script>

<style>

</style>