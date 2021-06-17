<template>
<div class="syllabuses content">
  <div class="header">
    <h1>Syllabuses</h1>
    <button v-if="syllabuses.length">
      <AddCircleOutlineIcon class="md-18" />
    <span>Add new</span>
    </button>
  </div>
  <div v-if="error">{{ error }}</div>
    <div v-if="syllabuses.length" class="container">
      <div v-for="syllabus in syllabuses" :key="syllabus.id">
        <SingleSyllabus :syllabus="syllabus" />
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
</div>
</template>

<script>
import getSyllabuses from '../composables/getSyllabuses'

import SingleSyllabus from '../components/SingleSyllabus.vue'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Syllabuses",
  components: {
    SingleSyllabus,
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { syllabuses, error, load } = getSyllabuses()

    load()

    return { syllabuses, error }
  }
}
</script>

<style>

</style>