import { ref } from "vue"
import { projectFirestore } from "../firebase/config"

const getDepartments = () => {
  const departments = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('departments').get()
      
      departments.value = res.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })
    } catch(err) {
      error.value = err.message
    }
  }

  return { departments, error, load }
}

export default getDepartments