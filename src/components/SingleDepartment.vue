<template>
  <div class="department">
    <div class="faculty">
      <p>{{ department.faculty.name }}</p>
    </div>
    <div class="header">
      <h2>{{ department.name }}</h2>
      <div class="actions">
        <button @click="handleEdit(department.id)" class="action-white">
          <EditIcon class="md-24"/>
        </button>
        <button @click="handleDelete(department.id)" class="action-white">
          <DeleteIcon class="md-24"/>
        </button>
      </div>
    </div>
    <div v-if="department.syllabuses.length">
      <div v-for="syllabus in department.syllabuses" :key="syllabus.id" class="syllabus">
        <p>{{ syllabus.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import { projectFirestore } from '../firebase/config'

import EditIcon from '../components/icons/Edit.vue'
import DeleteIcon from '../components/icons/Delete.vue'

import getDocument from '../composables/getDocument'
import useDocument from '../composables/useDocument'

export default {
  props: ['department'],
  name: "SingleDepartment",
  components: {
    EditIcon,
    DeleteIcon
  },
  setup(props) {
    const router = useRouter()

    const handleDelete = async (id) => {
      await projectFirestore.collection('departments').doc(id).delete()

      props.department.syllabuses.forEach(async(element) => {
        const getSyllabus = await projectFirestore.collection('syllabuses').doc(element.id).get()
        const { updateDoc: updateSyllabus } = useDocument('syllabuses', element.id)

        let _syllabus = { ...getSyllabus.data(), id: element.id}
        _syllabus.departments.forEach((dep, index, object) => {
          if (dep.id === id) {
            console.log('match')
            object.splice(index, 1)
          }
        });

        await updateSyllabus(_syllabus)
      });
    }

    const handleEdit = async (id) => {
      router.push({ name: 'DepartmentEdit', params: { id } })
    }

    return { handleDelete, handleEdit }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.department {
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
}


</style>