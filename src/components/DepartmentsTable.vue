<template>
  <div v-for="department in departments" :key="department.id">
    <SingleDepartment :department="department" />
  </div>
</template>

<script>
import SingleDepartment from '../components/SingleDepartment.vue'

import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['departments'],
  components: {
    SingleDepartment,
    EditIcon,
    DeleteIcon
  },
  setup() {
  }
}
</script>

<style>

</style>