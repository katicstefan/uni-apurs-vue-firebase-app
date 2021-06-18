<template>
  <div class="takesplaceins content">
    <div class="header">
      <h1>Terms</h1>
      <router-link :to="{ name: 'TakesPlaceInCreate' }">
        <button>
          <AddCircleOutlineIcon />
          <span>Add new</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: "TakesPlaceIns",
  components: {
    AddCircleOutlineIcon,
    Spinner
  }
}
</script>

<style>

</style>