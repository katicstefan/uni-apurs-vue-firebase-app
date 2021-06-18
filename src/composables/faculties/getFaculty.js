import { ref } from 'vue'
import { projectFirestore } from '../../firebase/config'

const getFaculty = (id) => {
    const faculty = ref({})
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('faculties').doc(id).get()
            
            if (!res.exists) {
                throw new Error('Faculty doesn\'t exist.')
            }
            faculty.value = { ...res.data(), id: res.id }
        } catch(err) {
            error.value = err.message
        }
    }

    return { faculty, error, load }
}

export default getFaculty