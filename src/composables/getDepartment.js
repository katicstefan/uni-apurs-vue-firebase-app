import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDepartment = (id) => {
    const department = ref({})
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('departments').doc(id).get()
            
            if (!res.exists) {
                throw new Error('Department doesn\'t exist.')
            }
            department.value = { ...res.data(), id: res.id }
        } catch(err) {
            error.value = err.message
        }
    }

    return { department, error, load }
}

export default getDepartment