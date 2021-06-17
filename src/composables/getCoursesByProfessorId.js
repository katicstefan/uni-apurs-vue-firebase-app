import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCoursesByProfessorId = (id) => {
    const courses = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let professor = await projectFirestore.collection('professors').doc(id).get()

            let res = await projectFirestore.collection('courses')
                .where('professors', 'array-contains', professor.ref)
                .get()
            
            courses.value = res.docs.map(doc => {
                return {...doc.data(), id: doc.id }
            })
        } catch(err) {
            error.value = err.message
        }
    }

    return { courses, error, load }
}

export default getCoursesByProfessorId