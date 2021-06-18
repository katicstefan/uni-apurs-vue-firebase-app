<template>
  <div class="students content">
    <div class="header">
      <h1>Students</h1>
      <router-link :to="{ name: 'StudentCreate' }">
        <button v-if="students.length">
          <AddCircleOutlineIcon class="md-18" />
          <span>Add new</span>
        </button>
      </router-link>
    </div>
    <div v-if="error">{{ error }}</div>
      <div v-if="students.length" class="container">
        <div v-for="student in students" :key="student.id">

        </div>
      </div>
      <div v-else>
        <Spinner />
      </div>
  </div>
</template>

<script>
import getStudents from '../composables/students/getStudents'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Students",
  components: {
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { students, error, load } = getStudents()

    load()

    return { students, error }
  }
}
</script>

<style lang="scss">
@import '../scss/Students.scss';
</style>