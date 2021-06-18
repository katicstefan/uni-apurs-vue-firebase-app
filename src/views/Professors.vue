<template>
  <div class="content">
    <div class="header">
      <h1>Professors</h1>
      <router-link :to="{ name: 'ProfessorCreate' }">
        <button>
          <AddCircleOutlineIcon class="md-18"/>
          <span>Add new</span>
        </button>
      </router-link>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="true" class="container">
      <div v-for="professor in professors" :key="professor.id" class="professor">
        <SingleProfessor :professor="professor"/>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getProfessors from '../composables/professors/getProfessors'

import SingleProfessor from '../components/SingleProfessor.vue'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Professors",
  components: {
    SingleProfessor,
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { professors, error, load } = getProfessors()

    load()

    return { professors, error }
  }
}
</script>

<style>

</style>