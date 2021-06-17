import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCourse = (id) => {
    const course = ref({})
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('courses').doc(id).get()
            
            if (!res.exists) {
                throw new Error('Course doesn\'t exist.')
            }
            course.value = { ...res.data(), id: res.id }
        } catch(err) {
            error.value = err.message
        }
    }

    return { course, error, load }
}

export default getCourse