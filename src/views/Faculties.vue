<template>
  <div class="faculties">
    <div class="header">
      <h1>Faculties component</h1>
      <button>
        <AddCircleOutlineIcon class="md-18" />
        <span>Add new</span>
      </button>
    </div>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FTN</td>
            <td>Strazilovska bb</td>
            <td>
              <EditIcon class="md-24 action" />
              <DeleteIcon class="md-24 action" />
            </td>
          </tr>
          <tr>
            <td>FTN</td>
            <td>Strazilovska bb</td>
            <td>
              <EditIcon class="md-24 action" />
              <DeleteIcon class="md-24 action" />
            </td>
          </tr>
          <tr>
            <td>FTN</td>
            <td>Strazilovska bb</td>
            <td>
              <EditIcon class="md-24 action" />
              <DeleteIcon class="md-24 action" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddCircleOutlineIcon from '../components/icons/AddCircleOutline.vue'
import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  name: "Faculties",
  components: {
    AddCircleOutlineIcon,
    EditIcon,
    DeleteIcon
  }
}
</script>

<style lang="scss">
@import '../scss/Faculties.scss';
</style>
