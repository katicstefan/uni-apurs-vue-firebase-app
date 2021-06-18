import { ref } from 'vue'
import { projectFirestore } from '../../firebase/config'

const getSyllabus = (id) => {
    const syllabus = ref({})
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('syllabusess').doc(id).get()
            
            if (!res.exists) {
                throw new Error('Syllabus doesn\'t exist.')
            }
            syllabus.value = { ...res.data(), id: res.id }
        } catch(err) {
            error.value = err.message
        }
    }

    return { syllabus, error, load }
}

export default getSyllabus