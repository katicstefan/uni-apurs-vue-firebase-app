<template>
  <div class="faculties">
    <div class="header">
      <h1>Faculties</h1>
      <button v-if="faculties.length">
        <AddCircleOutlineIcon class="md-18" />
        <span>Add new</span>
      </button>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="faculties.length" class="container">
      <FacultiesTable :faculties="faculties" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getFaculties from '../composables/getFaculties'

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
  },
}
</script>

<style lang="scss">
@import '../scss/Faculties.scss';
</style>
