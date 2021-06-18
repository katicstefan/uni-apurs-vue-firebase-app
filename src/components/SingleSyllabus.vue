<template>
  <div class="syllabus">
    <div class="header">
      <h2>{{ syllabus.name }}</h2>
      <button @click="handleEdit(syllabus.id)" class="action-white">
        <EditIcon class="md-24"/>
      </button>
      <button @click="handleDelete(syllabus.id)" class="action-white">
        <DeleteIcon class="md-24"/>
      </button>
    </div>
    <div v-if="syllabus.departments.length">
      <div v-for="department in syllabus.departments" :key="department.id">
        <p>{{ department.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'

import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['syllabus'],
  name: "SingleSyllabus",
  components: {
    EditIcon,
    DeleteIcon
  },
  setup() {
    const handleDelete = async (id) => {
      await projectFirestore.collection('syllabuses').doc(id).delete()
    }

    return { handleDelete }
  }
}
</script>

<style lang="scss">
@import '../assets/main.scss';
</style>