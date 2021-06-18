import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getSyllabusesByDepartmentId = (id) => {
  const syllabuses = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let department = await projectFirestore.collection('departments').doc(id).get()

      let res = await projectFirestore.collection('syllabuses')
        .where('departments', 'array-contains', department.ref)
        .get()

      console.log(res)
      syllabuses.value = res.docs.map(doc => {
        return {...doc.data(), id: doc.id }
      })
    } catch(err) {
      error.value = err.message
    }
  }

return { syllabuses, error, load }
}

export default getSyllabusesByDepartmentId