import { ref } from 'vue'
import { projectFirestore } from '../../firebase/config'

const getClassrooms = () => {
    const classrooms = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            await projectFirestore.collection('classrooms')
            .orderBy('name', 'desc')
            .onSnapshot(snap => {
                classrooms.value  = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
            })
        } catch(err) {
            error.value = err.message
        }
    }

    return { classrooms, error, load }
}

export default getClassrooms