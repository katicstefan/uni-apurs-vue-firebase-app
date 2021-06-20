<template>
  <div class="content">
    <div class="header">
      <h1>Edit existing - Faculty</h1>
    </div>
    <div class="container" >
      <form @submit.prevent="handleSubmit" v-if="faculty">
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
import { useRouter } from 'vue-router'
import getUser from '../../composables/getUser'

import { onBeforeUpdate, ref, watch } from 'vue'

import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'

import { projectFirestore } from '../../firebase/config'


export default {
  name: 'FacultyEdit',
  props: ['id'],
  setup(props) {
    const router = useRouter()
    
    const { user } = getUser()
    
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })

    const { updateDoc } = useDocument('faculties', props.id)
    const { document: faculty } = getDocument('faculties', props.id)

    const name = ref('')
    const address = ref('')

    let formFilled = false

    onBeforeUpdate(() => {
      if (!formFilled) {
        name.value = faculty.value.name
        address.value = faculty.value.address
        formFilled = true
      }
    })

    const handleSubmit = async () => {
      const updates = {
        name: name.value,
        address: address.value,
      }
      const res = await updateDoc(updates)
      const departments = await projectFirestore.collection('departments').where('faculty.id', '==', props.id).get()
      departments.docs.map(doc => {
        const { updateDoc: updateDepartment } = useDocument('departments', doc.id)
        updateDepartment({ "faculty.name": updates.name, "faculty.address": updates.address })
      })

      router.push({ name: 'Faculties' })
    }

    return {  faculty, name, address, handleSubmit }
  }
}
</script>

<style>

</style>