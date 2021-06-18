<template>
  <div class="professor">
    <h2>{{ professor.firstName + ' ' + professor.lastName }}</h2>
    <div v-for="course in courses" :key="course.id">
      {{ course.name }}
    </div>
  </div>
</template>

<script>
import getCoursesByProfessorId from '../composables/courses/getCoursesByProfessorId'

export default {
  props: ['professor'],
  name: "SingleProfessor",
  setup(props) {
    const { courses, error, load } = getCoursesByProfessorId(props.professor.id)

    load()

    return { courses, error }
  }
}
</script>

<style>

</style>