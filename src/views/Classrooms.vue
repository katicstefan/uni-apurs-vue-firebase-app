<template>
  <div class="classrooms content">
    <div class="header">
      <h1>Classrooms</h1>
      <button>
        <AddCircleOutlineIcon class="md-18" />
        <span>Add New</span>
      </button>
    </div>
    <div class="container">

    </div>
  </div>
</template>

<script>
import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'

export default {
  name: "Classrooms",
  components: {
    AddCircleOutlineIcon
  }
}
</script>

<style lang="scss">
@import '../scss/Classrooms.scss';
</style>