<template>
  <div class="department">
    <h2>{{ department.name }}</h2>
    <div class="faculty">
      <p>{{ faculty.name }}</p>
    </div>
  </div>
</template>

<script>
import getFaculty from '../composables/getFaculty'

export default {
  props: ['department'],
  name: "SingleDepartment",
  setup(props) {
    const { faculty, error, load } = getFaculty(props.department.faculty.id)

    load()

    return { faculty, error }
  }
}
</script>

<style lang="scss">
@import '../assets/main.scss';
.department {
  background-color: rgba(map-get($map: $colors, $key: primary-green), 0.05);
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 40px 20px;
  margin-bottom: 40px;

  h2 {
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
}
</style>