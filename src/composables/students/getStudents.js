import { ref } from "vue"
import { projectFirestore } from '../../firebase/config'

const getStudents = () => {
  const students = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      await projectFirestore.collection('students')
        .orderBy('index', 'asc')
        .onSnapshot(snap => {
          students.value = snap.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
          })
        })
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { students, error, load }
}

export default getStudents