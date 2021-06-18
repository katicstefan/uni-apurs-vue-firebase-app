<template>
  <div class="courses content">
    <div class="header">
      <h1>Courses</h1>
      <router-link :to="{ name: 'CourseCreate' }">
        <button>
          <AddCircleOutlineIcon />
          <span>Add new</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import AddCircleOutlineIcon from '../components/icons/AddCircleOutline'

export default {
  name: "Courses",
  components: {
    AddCircleOutlineIcon
  },
  setup() {

  }
}
</script>

<style>

</style>