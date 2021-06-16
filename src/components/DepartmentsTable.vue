<template>
  <h1>departments table</h1>
  <div v-for="department in departments" :key="department.id">
    <span>{{department.name}}</span>
    <span>{{department.faculty.id}}</span>
  </div>
</template>

<script>
import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['departments'],
  components: {
    EditIcon,
    DeleteIcon
  },
  setup() {
  }
}
</script>

<style>

</style>