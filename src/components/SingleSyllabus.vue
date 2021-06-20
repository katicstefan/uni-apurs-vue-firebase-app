<template>
  <div class="syllabus">
    <div class="header">
      <h2>{{ syllabus.name }}</h2>
      <div class="actions">
        <button @click="handleEdit(syllabus.id)" class="action-white">
          <EditIcon class="md-24"/>
        </button>
        <button @click="handleDelete(syllabus.id)" class="action-white">
          <DeleteIcon class="md-24"/>
        </button>
      </div>
    </div>
    <div v-if="syllabus.departments.length">
      <div v-for="department in syllabus.departments" :key="department.id" class="department">
        <p>{{ department.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import { projectFirestore } from '../firebase/config'

import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'
import useDocument from '../composables/useDocument'

export default {
  props: ['syllabus'],
  name: "SingleSyllabus",
  components: {
    EditIcon,
    DeleteIcon
  },
  setup(props) {
    const router = useRouter()

    const handleDelete = async (id) => {
      await projectFirestore.collection('syllabuses').doc(id).delete()

      props.syllabus.departments.forEach(async(element) => {
        const getDepartment = await projectFirestore.collection('departments').doc(element.id).get()
        const { updateDoc: updateDepartment } = useDocument('departments', element.id)

        let _department = { ...getDepartment.data(), id: element.id}
        _department.syllabuses.forEach((syl, index, object) => {
          if (syl.id === id) {
            console.log('match')
            object.splice(index, 1)
          }
        });

        await updateDepartment(_department)
      });
    }

    const handleEdit = async (id) => {
      router.push({ name: 'SyllabusEdit', params: { id } })
    }

    return { handleDelete, handleEdit }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.syllabus {
  background-color: map-get($map: $colors, $key: background-white);
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 40px;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.02);
    transition: all ease 0.2s;
  }

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

  .department {
    p {
      padding: 20px 20px;
      margin: 10px 0;

      border-radius: 10px;
      border: 1px solid map-get($map: $colors, $key: border-gray);
      
      background-color: rgba(map-get($map: $colors, $key: primary-green), 0.2);
      
    }
  }
}
</style>