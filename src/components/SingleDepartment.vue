<template>
  <span>{{ department.name }}</span>
  <span>{{ faculty.name }}</span>
  <span>{{ faculty.address }}</span>
</template>

<script>
import getFaculty from '../composables/getFaculty'

export default {
  props: ['department'],
  name: "SingleDepartment",
  setup(props) {
    const department = props.department
    const { faculty, error, load } = getFaculty(props.department.faculty.id)

    load()

    console.log(faculty)

    return { faculty, error }
  }
}
</script>

<style>

</style>