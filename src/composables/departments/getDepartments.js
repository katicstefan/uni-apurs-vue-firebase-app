import { ref } from "vue"
import { projectFirestore } from "../../firebase/config"

const getDepartments = () => {
  const departments = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      await projectFirestore.collection('departments')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          departments.value = snap.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
          })
        })
    } catch(err) {
      error.value = err.message
    }
  }

  return { departments, error, load }
}

export default getDepartments