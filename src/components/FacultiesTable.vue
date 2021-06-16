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
          <EditIcon @click="handleEdit" class="md-24 action" />
          <DeleteIcon @click="handleDelete" class="md-24 action" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['faculties'],
  components: {
    EditIcon,
    DeleteIcon
  },
  setup() {
    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return { handleEdit, handleDelete}
  },
}
</script>

<style>

</style>