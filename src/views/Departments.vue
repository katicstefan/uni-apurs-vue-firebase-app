<template>
  <div class="departments content">
    <div class="header">
      <h1>Departments</h1>
      <router-link :to="{ name: 'DepartmentCreate' }" class="link">
        <button v-if="departments.length">
          <AddCircleOutlineIcon class="md-18" />
          <span>Add new</span>
        </button>
      </router-link>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="departments.length" class="container">
      <div v-for="department in departments" :key="department.id">
        <SingleDepartment :department="department" />
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getDepartments from '../composables/getDepartments'

import SingleDepartment from '../components/SingleDepartment.vue'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Departments",
  components: {
    SingleDepartment,
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { departments, error, load } = getDepartments()

    load()

    return { departments, error }
  }
}
</script>

<style lang="scss">
@import '../scss/Departments.scss';
</style>