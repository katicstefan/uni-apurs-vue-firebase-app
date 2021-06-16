<template>
  <div class="departments content">
    <div class="header">
      <h1>Departments</h1>
      <button v-if="departments.length">
        <AddCircleOutlineIcon class="md-18" />
        <span>Add new</span>
      </button>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="departments.length" class="container">
      <DepartmentsTable :departments="departments" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getDepartments from '../composables/getDepartments'

import DepartmentsTable from '../components/DepartmentsTable.vue'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Departments",
  components: {
    DepartmentsTable,
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { departments, error, load } = getDepartments()

    load()

    //console.log(departments)

    return { departments, error }
  }
}
</script>

<style lang="scss">
@import '../scss/Departments.scss';
</style>