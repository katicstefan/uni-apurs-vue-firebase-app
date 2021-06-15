import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getFaculties = () => {
    const faculties = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('faculties').get()
            
            faculties.value = res.docs.map(doc => {
                return {...doc.data(), id: doc.id }
            })
        } catch(error) {
            error.value = error.message
        }
    }

    return { faculties, error, load }
}

export default getFaculties