<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="faculty in faculties" :key="faculty.id">
        <td>{{ faculty.name }}</td>
        <td>{{ faculty.address }}</td>
        <td>
          <EditIcon @click="handleEdit(faculty.id)" class="md-24 action" />
          <DeleteIcon @click="handleDelete(faculty.id)" class="md-24 action" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useRouter } from 'vue-router'

import useDocument from '@/composables/useDocument'

import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['faculties'],
  components: {
    EditIcon,
    DeleteIcon
  },
  setup() {
    const router = useRouter()

    const handleEdit = async (id) => {
      router.push({ name: 'FacultyEdit', params: { id } })
    }

    const handleDelete = async (id) => {
      const { deleteDoc } = useDocument('faculties', id)
      await deleteDoc()
    }

    return { handleEdit, handleDelete }
  },
}
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>