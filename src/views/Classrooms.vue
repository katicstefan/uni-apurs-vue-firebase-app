<template>
  <div class="classrooms content">
    <div class="header">
      <h1>Classrooms</h1>
      <router-link :to="{ name: 'ClassroomCreate' }">
        <button>
          <AddCircleOutlineIcon class="md-18" />
          <span>Add New</span>
        </button>
      </router-link>
    </div>
    <div v-if="error">{{ error }}</div>
    <div class="container">
      <div v-if="classrooms.length">
        <div v-for="classroom in classrooms" :key="classroom.id">
          {{ classroom.name }}
        </div>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import getClassrooms from '../composables/classrooms/getClassrooms'

import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "Classrooms",
  components: {
    AddCircleOutlineIcon,
    Spinner
  },
  setup() {
    const { classrooms, error, load } = getClassrooms()

    load()

    return { classrooms, error }
  }
} 
</script>

<style lang="scss">
@import '../scss/Classrooms.scss';
</style>