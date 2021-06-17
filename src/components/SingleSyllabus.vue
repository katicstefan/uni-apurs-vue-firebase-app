<template>
  <div class="syllabus">
    <h2>{{ syllabus.name }}</h2>
    <div v-for="department in departments" :key="department.id" class="departments">
      <div class="department">
        {{ department.value.name }}
      </div>
    </div>
  </div>
</template>

<script>
import getDepartment from '../composables/getDepartment'
export default {
  props: ['syllabus'],
  setup(props) {
    let departments = []

    props.syllabus.departments.forEach(element => {
      const { department, error, load } = getDepartment(element.id)
      load()
      departments.push(department)
    });

    return { departments }
  }
}
</script>

<style>

</style>