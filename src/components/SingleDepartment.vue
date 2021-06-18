<template>
  <div class="department">
    <div class="faculty">
      <p>{{ department.faculty.name }}</p>
    </div>
    <div class="header">
      <h2>{{ department.name }}</h2>
      <button @click="handleEdit(department.id)" class="action-white">
        <EditIcon  class="md-24"/>
      </button>
      <button @click="handleDelete(department.id)" class="action-white">
        <DeleteIcon  class="md-24"/>
      </button>
    </div>
    <div v-if="department.syllabuses.length">
      <div v-for="syllabus in department.syllabuses" :key="syllabus.id" class="syllabus">
        <p>{{ syllabus.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'

import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['department'],
  name: "SingleDepartment",
  components: {
    EditIcon,
    DeleteIcon
  },
  setup() {
    const handleDelete = async (id) => {
      await projectFirestore.collection('departments').doc(id).delete()
    }

    return { handleDelete }
  }
}
</script>

<style lang="scss">
@import '../assets/main.scss';
.department {
  background-color: map-get($map: $colors, $key: background-white);
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 40px;

  h2 {
    padding: 0;
    margin: 20px 0;
    margin-right: 50px;
  }

  p {
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }

  .header {
    margin: 0;

    button:first-of-type {
      margin-right: 20px;
    }
  }
}

.faculty {
  width: fit-content;
  padding: 10px 20px;
  background-color: map-get($map: $colors, $key: component-background-white);
  border: 1px solid map-get($map: $colors, $key: border-gray);
  border-radius: 10px;

  p {
    padding: 0;
    margin: 0;

    font-weight: bold;
  }
}

.syllabus {
  p {
    padding: 20px 20px;
    margin: 10px 0;

    border-radius: 10px;
    border: 1px solid map-get($map: $colors, $key: border-gray);
    
    background-color: rgba(map-get($map: $colors, $key: primary-green), 0.2);
    
  }
}
</style>