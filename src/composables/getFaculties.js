import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getFaculties = () => {
    const faculties = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            await projectFirestore.collection('faculties')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                faculties.value  = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
            })
        } catch(err) {
            error.value = err.message
        }
    }

    return { faculties, error, load }
}

export default getFaculties