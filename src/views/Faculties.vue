<template>
  <div class="faculties content">
    <div class="header">
      <h1>Faculties</h1>
      <router-link :to="{ name: 'FacultyCreate' }" class="link">
        <button>
          <AddCircleOutlineIcon class="md-18" />
          <span>Add new</span>
        </button>
      </router-link>
    </div>
    <div v-if="error">{{ error }}</div>
    <div class="container">
      <FacultiesTable :faculties="faculties" v-if="faculties.length"/>
      <div v-else>
        <Spinner />
      </div>
    </div>
    
  </div>
</template>

<script>
import getFaculties from '../composables/faculties/getFaculties'

import FacultiesTable from '../components/FacultiesTable.vue'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Faculties",
  components: {
    FacultiesTable,
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { faculties, error, load } = getFaculties()
  
    load()

    return { faculties, error }
  }
}
</script>

<style lang="scss">
@import '../scss/Faculties.scss';
</style>
