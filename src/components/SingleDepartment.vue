<template>
  <div class="department">
    <div class="faculty">
      <p>{{ faculty.name }}</p>
    </div>
    <div class="header">
      <h2>{{ department.name }}</h2>
      <button class="action-white">
        <DeleteIcon class="md-24"/>
      </button>
    </div>
    <div v-for="syllabus in syllabuses" :key="syllabus.id" class="syllabus">
      <p>
        {{ syllabus.name }}
      </p>
    </div>
  </div>
</template>

<script>
import getFaculty from '../composables/getFaculty'
import getSyllabusesByDepartmentId from '../composables/getSyllabusesByDepartmentId'

import DeleteIcon from '../components/icons/Delete.vue'

export default {
  props: ['department'],
  name: "SingleDepartment",
  components: {
    DeleteIcon
  },
  setup(props) {
    const { faculty, error: errorFaculty, load: loadFaculty } = getFaculty(props.department.faculty.id)
    const { syllabuses, error: errorSyllabuses, load: loadSyllabuses } = getSyllabusesByDepartmentId(props.department.id)

    loadFaculty()
    loadSyllabuses()

    return { faculty, errorFaculty, syllabuses, errorSyllabuses }
  }
}
</script>

<style lang="scss">
@import '../assets/main.scss';
.department {
  background-color: map-get($map: $colors, $key: background-white);
  border-radius: 10px;
  border: 1px solid #eee;
  //padding: 40px 20px;
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