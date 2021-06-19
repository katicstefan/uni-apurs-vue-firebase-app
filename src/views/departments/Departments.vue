<template>
  <div class="departments content">
    <div class="header">
      <h1>Departments</h1>
      <router-link :to="{ name: 'DepartmentCreate' }" class="link">
        <button>
          <AddCircleOutlineIcon class="md-18" />
          <span>Add new</span>
        </button>
      </router-link>
    </div>
    <div v-if="error">{{ error }}</div>
    <div class="container">
      <div v-if="departments">
        <div v-for="department in departments" :key="department.id">
          <SingleDepartment :department="department" />
        </div>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'

import SingleDepartment from '../../components/SingleDepartment.vue'

import AddCircleOutlineIcon from '../../components/icons/AddCircleOutline.vue'
import Spinner from '../../components/Spinner.vue'

export default {
  name: "Departments",
  components: {
    SingleDepartment,
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { documents: departments, error } = getCollection('departments')

    return { departments, error }
  }
}
</script>

<style lang="scss">
@import '@/scss/Departments.scss';
</style>